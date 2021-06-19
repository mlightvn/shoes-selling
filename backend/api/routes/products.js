var express = require('express');
var router = express.Router();

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
  res.json(data);
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id
  let data = getItem(id)
  res.json(data);
});

router.post('/:id', function(req, res, next) {
  const id = req.query.id
  let data = getItem(id)
  res.json(data);
});

router.put('/:id', function(req, res, next) {
  const id = req.query.id
  let data = getItem(id)
  res.json(data);
});

function getItem(id){
  return itemsList.find(product => product.id == id)
}

module.exports = router;
