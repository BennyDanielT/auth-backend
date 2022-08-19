const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dbConnect = require('./db/dbConnect');
// const Inventory = require('./db/storageModel');
var fetchRouter = require('./routes/retrieve-route');
dbConnect();
app.use('/', fetchRouter);
// execute database connection
// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// add endpoint
// app.post("/add", (request, response) => {
  
//       // create a new entry instance and collect the data
//       const logEntry = new Inventory({
//         province: request.body.province,
//         region: request.body.region,
//         store: request.body.store,
//         brand: request.body.brand,
//         product: request.body.product,
//         facings: request.body.facings,
//         logDate: request.body.logDate,
//       });

//       // save the new entry
//       logEntry
//         .save()
//         // return success if the new entry is added to the database successfully
//         .then((result) => {
//           response.status(201).send({
//             message: "Log Entry Created Successfully",
//             result,
//           });
//         })
//         // catch erroe if the new entry wasn't added successfully to the database
//         .catch((error) => {
//           response.status(500).send({
//             message: "Error creating Log Entry",
//             error,
//           });
//         });

   
// });

module.exports = app;
