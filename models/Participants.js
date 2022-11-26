const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ParticipantsSchema = new Schema({
  participants: Array,
  name: String,
  status: String
});

module.exports = mongoose.model("Participants", ParticipantsSchema);
