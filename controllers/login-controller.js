module.exports = {
  login: function (req, res) {
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const User = require('../db/userModel');
  User.findOne({ email: req.body.email })

  // if email exists
  .then((user) => {
    // compare the password entered and the hashed password found
    bcrypt
      .compare(req.body.password, user.password)

      // if the passwords match
      .then((passwordCheck) => {
        // check if password matches
        if (!passwordCheck) {
          return res.status(400).send({
            message: 'Passwords does not match',
            error,
          });
        }

        //   create JWT token
        const token = jwt.sign(
          {
            userId: user._id,
            userEmail: user.email,
          },
          'RANDOM-TOKEN',
          { expiresIn: '24h' },
        );

        //   return success response
        res.status(200).send({
          message: 'Login Successful',
          email: user.email,
          token,
        });
      })
      // catch error if password do not match
      .catch((error) => {
        res.status(400).send({
          message: 'Passwords does not match',
          error,
        });
      });
  })
  // catch error if email does not exist
  .catch((e) => {
    res.status(404).send({
      message: 'Email not found',
      e,
    });
  });

    
  },
};

