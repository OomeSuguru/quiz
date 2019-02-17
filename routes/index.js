var express = require('express');
var router = express.Router();
const Quiz = require('../models/quiz');
const User = require('../models/user');

/* GET home page. */
router.get('/', function (req, res, next) {
  const title = 'クイズくん';
  if (req.user) {
    Quiz.findAll({
      where: {
        createdBy: req.user.id
      },
      order: [['"updatedAt"', 'DESC']]
    }).then((quizs) => {
      res.render('index', {
        title: title,
        user: req.user,
        quizs: quizs
      });
    });
  } else {
    // indexviewにusername出力するためuserの追加
    res.render('index', { title: title, user: req.user }); 
  }
});

module.exports = router;