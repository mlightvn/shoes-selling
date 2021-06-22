var express = require('express');
var router = express.Router();
var cors = require('cors')

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: true,
}

var itemsList = [
  {id: 1, name: "Product 1"},
  {id: 2, name: "Product 2"},
  {id: 3, name: "Product 3"},
  {id: 4, name: "Product 4"},
  {id: 5, name: "Product 5"},
  {id: 6, name: "Product 6"},
  {id: 7, name: "Product 7"},
  {id: 8, name: "Product 8"},
  {id: 9, name: "Product 9"},
  {id: 10, name: "Product 10"},
  {id: 11, name: "Product 11"},
  {id: 12, name: "Product 12"},
  {id: 13, name: "Product 13"},
  {id: 14, name: "Product 14"},
  {id: 15, name: "Product 15"},
  {id: 16, name: "Product 16"},
  {id: 17, name: "Product 17"},
  {id: 18, name: "Product 18"},
  {id: 19, name: "Product 19"},
  {id: 20, name: "Product 20"},
]

router.get('/', function(req, res, next) {
  let data = {
    list: itemsList
  }
  res.send(data);
});

router.get('/search', cors(corsOptions), function(req, res, next) {
  const model = cleanParameters(req.query)
  console.log("model")
  console.log(model)
  let list = itemsList.filter(item => {
    let isEqual = true
    for (let key in model){
      if(model[key] != item[key]){
        isEqual = false
      }
    }
    return isEqual
  })
  let data = {
    list: list
  }
  res.send(data);
});

router.get('/:id', cors(corsOptions), function(req, res, next) {
  const id = req.params.id
  let data = getItem(id)
  res.send(data);
});

router.post('', cors(corsOptions), function(req, res, next) {
  const model = cleanParameters(req.query)
  itemsList.push(model)
  res.send(model);
});

router.put('/:id', cors(corsOptions), function(req, res, next) {
  const model = cleanParameters(req.query)
  res.send(model);
});

function getItem(id){
  return itemsList.find(product => product.id == id)
}

function cleanParameters(params) {
  for (const key in params){
    if (params[key] == null) {
      delete params[key]
    }
  }
  return params
}

module.exports = router;
