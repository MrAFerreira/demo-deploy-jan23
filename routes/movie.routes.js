const express = require('express');
const router = express.Router();

router.get('/movies', (req, res, next) => {
  res.render('demo');
});

module.exports = router;
