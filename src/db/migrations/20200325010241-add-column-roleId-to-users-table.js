
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'RoleId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Roles',
        key: 'id'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'RoleId');
  }
};
