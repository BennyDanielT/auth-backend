module.exports = {
  addUser: function (req, res) {
    const bcrypt = require('bcrypt');

    const User = require('../db/userModel');
   
    // app.post('/register-user', (request, res) => {
      // hash the password
      console.log(req.body);

      bcrypt
        .hash(req.body.password, 10)
        .then((hashedPassword) => {
        
          const user = new User({
            email: req.body.email,
            password: hashedPassword,
          });

          // save the new user
          user
            .save()
            // return success if the new user is added to the database successfully
            .then((result) => {
              res.status(201).send({
                message: 'User Created Successfully',
                result,
              });
            })
            // catch erroe if the new user wasn't added successfully to the database
            .catch((error) => {
              res.status(500).send({
                message: 'Error creating user',
                error,
              });
            });
        })
        // catch error if the password hash isn't successful
        .catch((e) => {
          res.status(500).send({
            message: 'Password was not hashed successfully',
            e,
          });
        });
    // });
  },
};

