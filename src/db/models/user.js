module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      firstName: {
          type: DataTypes.STRING,
          allowNull: false
      },
      lastName: {
          type: DataTypes.STRING,
          allowNull: false
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false
      },
      phone: {
          type: DataTypes.STRING,
          allowNull: false
      },
      rut: {
          type: DataTypes.STRING,
          allowNull: true
      },
      encryptedPassword: {
          type: DataTypes.STRING,
          allowNull: false
      }
  }, {
      paranoid: true
  });

  return User;
};