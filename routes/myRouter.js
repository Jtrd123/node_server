const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/',(req , res )=>{
  res.status(200);
  res.type('text/html')
  res.sendFile(path.join(__dirname, "../webpages/index.html"));
})

router.get('/product/:id',(req , res )=>{
    const myparam = req.params.id
    if(myparam === '1'){
        res.status(200);
        res.type('text/html')
        res.sendFile(path.join(__dirname, "../webpages/product1.html"));
    } else if (myparam === '2') {
        res.sendFile(path.join(__dirname, "../webpages/product2.html"))
    } else if (myparam === '3') {
        res.sendFile(path.join(__dirname, "../webpages/product3.html"))
    } else {
      res.redirect('/')
    }
})

module.exports = router;