var mongoose = require('mongoose');

var timeEntrySchema = new mongoose.Schema({
  
  id: Number,
  wid: Number,
  pid: Number,
  billable: Boolean,
  start: Date,
  duration: Number,
  description: String,
  tags: Array,
  duronly: Boolean,
  at: Date,
  uid: Number

}, { timestamps: true });


var TimeEntry = mongoose.model('TimeEntry', timeEntrySchema);

module.exports = TimeEntry;