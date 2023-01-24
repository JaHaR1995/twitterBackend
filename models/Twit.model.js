const mongoose = require('mongoose')
const twitSchema = mongoose.Schema({
   twit: String,
   user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref : 'User'
   },
   like: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User' 
   }],

  

   
      
    
}); 

const Twit = mongoose.model('Twit', twitSchema);

module.exports = Twit
