var express = require('express');
var router = express.Router();
var taskCollection = require('./users');
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/submit', (req, res)=>{
  taskCollection.create({content: req.body.task})
.then(()=>{res.redirect("/")})
} 
)
router.get('/', function(req, res, next) {
  taskCollection.find({},(err,documents)=>{res.render('index')})
})

module.exports = router;
