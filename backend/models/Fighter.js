const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Fighter = new Schema({
  swordsman: {
      type: String
   },
   spearman: {
      type: String
   },
   rider: {
      type: String
   },
   archer: {
      type: String
   },
   animal: {
    type: String
 },
  avaibleEdit: {
    type: String
  }
}, {
   collection: 'fighters'
})

module.exports = mongoose.model('Fighter', Fighter)
