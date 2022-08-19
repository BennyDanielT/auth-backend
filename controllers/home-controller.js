var fetchModel = require('../models/retrieve-model');
module.exports = {
  home: function (req, res) {
   res.json({ message: 'Hey! This is your server response!' });
  },
};