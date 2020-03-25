const _ = require("lodash");
const router = require("express").Router();
const models = require("../../db/models");

const {NotFound} = require('../errors')

router.get("/", async (req, res) =>{
  try{

    const records = await models.User.findAll({
      paranoid: true,
      include:[{
        model: models.Roles
      }]
    })
    if(records){
      res.status(200).json(records)
    }else{
      res.error(new NotFound('No se encontraron usuarios'))
    }
  }catch(e){
    res.status(404).error(e)
  }
})

router.get("/:id", async (req, res) =>{
  try{
    
    const record = await models.User.findOne({
      where:{
        id: req.params.id
      }
    })
    if(record){
      res.json(record)
    }else{
      res.error(new NotFound('Usuario no encontrado'))
    }

  }catch(e){
    res.status(404).error(e)
  }
})

router.post("/", async (req, res) =>{
  try{
    const data = _.pick(req.body, ['firstName', 'lastName', 'email', 'phone', 'rut', 'encryptedPassword'])
    console.log('dataaaa', data)

    if(_.isEmpty(data)){
      return res.error(new UserError('No data given'))
    }
    if(!data.firstName){
      return res.error(new UserError('firstname is required'))
    }
    if(!data.lastName){
      return res.error(new UserError('lastName is required'))
    }
    if(!data.phone){
      return res.error(new UserError('phone is required'))
    }
    if(!data.rut){
      return res.error(new UserError('rut is required'))
    }
    if(!data.encryptedPassword){
      return res.error(new UserError('encryptedPassword is required'))
    }

    const record = await models.User.create(data)
    const getUser = await models.User.findOne({
      where: {id: record.id}
    })
    res.json(getUser.toJSON());
  }catch(e){
    if (e.name === 'SequelizeUniqueConstraintError') {
      res.error(new UserError(e.message))
    } else {
      res.error(e);
    }
  }
})

router.put('/:id', async (req, res) =>{
  try{
    const data = _.pick(req.body, ["firstname", "lastName", "phone", "rut", "encryptedPassword", "email"]);

    const user = await models.User.findByPk(req.params.id)

    if(user){
      const updateUser = await user.update({
        ...data
      })
      res.status(200).json(updateUser);
    }else{
      return res.status(404).error(new NotFound('No se encontró el usuario'));
    }

  }catch(e){
    res.status(400).json({
      error:{
          type: 'Bad Request',
          message: 'Error'
      }
    }) 
  }
})

router.delete('/:id', async (req, res) =>{
  try{
    const user = await models.User.findByPk(req.params.id)

    if(user){
      await user.destroy()
      return res.status(204).json()
    }else{
      res.status(404).error(new NotFound('No se encontró el usuario'))
    }
  }catch(e){
    res.status(400).json({
      error: {
          type: 'Bad Request',
          message: 'Error'
      }
    })
  }
})

module.exports = router;