/*
  A time limiting record, by urls
  models/urllist.js
*/

var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var Promise=require('bluebird');
Promise.promisifyAll(mongoose);
mongoose.Promise=global.Promise;

var urlSchema= new Schema({
  requrl:{type:'String',required:true},
  hashedurl:{type:'String',required:true},
  createdAt:{
    type: Date,
    required:true.
    default: Date.now,
    expires:config.ttl
  }
  hits:{
    type: Number,
    default: 0,
    required:true,
    max: config.maxHits,
    min:0
  }
});

urlSchema.index(
  { createdAt: 1},
  {expireAfterSeconds:config.ttl}
);

module.exports = mongoose.model("urlList",urlSchema);
