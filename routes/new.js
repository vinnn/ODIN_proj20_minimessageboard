var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', { author: "Olga", message: "all that" });
});

module.exports = router;




