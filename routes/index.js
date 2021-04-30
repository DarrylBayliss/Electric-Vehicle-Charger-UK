var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/blah', function(req, res) {
  res.json({
    "blah" : "blah"
  })
});

module.exports = router;