'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Question = loader.database.define('questions', {
  questionId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  questionName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  answer: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  quizId: {
    type: Sequelize.UUID,
    allowNull: false
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

module.exports = Question;