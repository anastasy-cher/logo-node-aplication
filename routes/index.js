const express = require('express');
const router = express.Router();
const {conection} = require('../config/mailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/recoger', function(req, res, next) {
  // console.log(req.body)
  const { email, message } = req.body
  // console.log(email, message)

  conection(email, message)
  res.redirect('/contact')
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});


module.exports = router;
