'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Choice = loader.database.define('choices', {
  choiceId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  choice: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  questionId: {
    type: Sequelize.INTEGER,
    // allowNull: false
  }
}, {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        fields: ['questionId']
      }
    ]
  });

module.exports = Choice;