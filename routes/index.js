var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // indexviewにusername出力するためuserの追加
  res.render('index', { title: 'Express', user: req.user });
});

module.exports = router;
