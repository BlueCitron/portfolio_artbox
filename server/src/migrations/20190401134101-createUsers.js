'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: Sequelize.STRING(20),
        allowNull: false,
        required: true,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(30),
        allowNull: false,
        required: true,
      },
      type: {
        type: Sequelize.ENUM('default', 'kakao', 'facebook', 'naver'),
        allowNull: false,
        required: true,
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      },
    }, {
      timestamps: true,
      paranoid: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
