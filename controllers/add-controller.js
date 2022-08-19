
module.exports = {
  addData: function (req, res) {
    console.log(req.body);
    const Inventory = require('../db/storageModel');
    const logEntry = new Inventory({
      province: req.body.province,
      region: req.body.region,
      store: req.body.store,
      brand: req.body.brand,
      product: req.body.product,
      facings: req.body.facings,
      logDate: req.body.logDate,
    });

    // save the new entry
    logEntry
      .save()
      // return success if the new entry is added to the database successfully
      .then((result) => {
        res.status(201).send({
          message: 'Log Entry Created Successfully',
          result,
        });
      })
      // catch erroe if the new entry wasn't added successfully to the database
      .catch((error) => {
        res.status(500).send({
          message: 'Error creating Log Entry',
          error,
        });
      });
  },
};


// app.post('/add', (request, response) => {
//   // create a new entry instance and collect the data
//   const logEntry = new Inventory({
//     province: request.body.province,
//     region: request.body.region,
//     store: request.body.store,
//     brand: request.body.brand,
//     product: request.body.product,
//     facings: request.body.facings,
//     logDate: request.body.logDate,
//   });

//   // save the new entry
//   logEntry
//     .save()
//     // return success if the new entry is added to the database successfully
//     .then((result) => {
//       response.status(201).send({
//         message: 'Log Entry Created Successfully',
//         result,
//       });
//     })
//     // catch erroe if the new entry wasn't added successfully to the database
//     .catch((error) => {
//       response.status(500).send({
//         message: 'Error creating Log Entry',
//         error,
//       });
//     });
// });