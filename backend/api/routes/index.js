var express = require('express');
var router = express.Router();
var cors = require('cors')

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: true,
}

router.use(cors(corsOptions))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shoes Selling' });
});

module.exports = router;
