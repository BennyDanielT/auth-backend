var mongoose = require('mongoose');
const dbConnect = require('../db/dbConnect');
// dbConnect();

const InventorySchema = new mongoose.Schema({
  province: {
    type: String,
    required: [true, 'Please input a Province!'],
    // unique: [true, 'Email Exist'],
    default: 'Nova Scotia',
  },

  region: {
    type: String,
    required: [true, 'Please input a Region!'],
    // unique: [true, 'Email Exist'],
    default: 'Halifax',
  },

  store: {
    type: String,
    required: [true, 'Please input a Store!'],
    // unique: [true, 'Email Exist'],
    default: 'Clyde Street',
  },

  brand: {
    type: String,
    required: [true, 'Please input a Brand!'],
    // unique: [true, 'Email Exist'],
    default: 'Clyde Street',
  },

  product: {
    type: String,
    required: [true, 'Please input a Product!'],
    // unique: [true, 'Email Exist'],
    default: 'Clyde Street',
  },

  facings: {
    type: Number,
    // required: [true, 'Please input the number of Facings!'],
    // unique: [true, 'Email Exist'],
    default: 0,
  },

  logDate: {
    type: Date,
    // required: [true, 'Please input the number of Facings!'],
    // unique: [true, 'Email Exist'],
    default: Date.now,
  },

});
// var userSchema = new mongoose.Schema({
//   full_name: String,
//   email_address: String,
//   city: String,
//   country: String,
// });
inventoryTable = mongoose.model('Ivtry', InventorySchema,'inventories');

module.exports = {
  fetchData: function (callback) {
    var inventoryData = inventoryTable.find({});
    inventoryData.exec(function (err, data) {
      if (err) throw err;
      return callback(data);
    });
  },
};