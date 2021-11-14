const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const affirmationSchema = new Schema({
   description: { type: String, required: true },
});

const Affirmation = mongoose.model('Affirmation', affirmationSchema);

module.exports = Affirmation;
