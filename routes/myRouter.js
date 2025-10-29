const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  const products = [
    {name: "Notebook", price: 48900, image:"../images/products/product1.png"},
    {name: "Clothes", price: 3300, image:"../images/products/product2.png"},
    {name: "Headphones", price: 8900, image:"../images/products/product3.png"}

  ]
  res.render('index',{
      products: products  
  })
})

router.get('/addForm',(req,res)=>{
  res.render('form')
})

router.get('/manage',(req,res)=>{
  res.render('manage')
})

router.post('/insert',(req,res)=>{
  console.log(req.body.name)
  res.render('form')
})

module.exports = router;