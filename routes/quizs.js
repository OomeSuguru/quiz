'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');
const uuid = require('uuid');
const Quiz = require('../models/quiz');
const Question = require('../models/question');
const Choice = require('../models/choice');

// authenticationEnsurerは認証
router.get('/new', authenticationEnsurer, (req, res, next) => {
  res.render('new', { user: req.user });
});

router.post('/', authenticationEnsurer, (req, res, next) => {
  const quizId = uuid.v4();
  const updatedAt = new Date();
  Quiz.create({
    quizId: quizId,
    quizName: req.body.quizName,
    description: req.body.description,
    createdBy: req.user.id,
    updatedAt: updatedAt
    // データが入る
  }).then((quiz) => {
    // データの取得　データの保存
    // questionの空白を取り除き文字列変換
    const question = req.body.question.trim();
    const answer_content = req.body.answer.trim();
    Question.create({
      // questionId: question.id,
      question: question,
      answer: answer_content,
      quizId: quiz.quizId
    }).then((question) => {
      const choice = req.body.choice.toString();
      Choice.create({
        choice: choice,
        questionId: question.questionId
      });
      res.redirect('/');
    });
  });
});

module.exports = router;