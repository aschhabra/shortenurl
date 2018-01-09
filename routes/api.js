var express = require('express');
var router = express.Router;
var urlList = require('../models/urllist');

router.route('/:url/req')
  .get({
  })//

  .get(function(req,res,next){
router.route('/:hashedurl')
  .get(function(req,res,next){
    urlList.findOneAndUpdate(
      {hashedurl:req.parms.hashedurl},
      {$inc:{hits:1}},
      {upsert: false}) // upsert is set to false to not create a new document in a situation when find does not get match
      .exec(function
  })

