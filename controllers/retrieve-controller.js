var fetchModel = require('../models/retrieve-model');
module.exports = {
  fetchData: function (req, res) {
    fetchModel.fetchData(function (data) {
    //   res.render('inventory-table', { inventoryData: data });
      res.json({ inventoryData: data });
    //   console.log(data);
    });
  },
};
