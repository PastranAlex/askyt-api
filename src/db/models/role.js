module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Roles.associate = function(models) {
    Roles.hasMany(models.User);
  }

  return Roles;
};

