'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Quiz = loader.database.define('quizs', {
  quizId: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  quizName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  createdBy: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
  }
}, {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        fields: ['createdBy']
      }
    ]
  });

module.exports = Quiz;