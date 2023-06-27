const jwt = require('jsonwebtoken');
module.exports = async (request, response, next) => {
  try {
    //   get the token from the authorization header
    const token = await request.headers.authorization.split(' ')[1];

    //check if the token matches the supposed origin
    const decodedToken = await jwt.verify(token, 'RANDOM-TOKEN');

    // retrieve the user details of the logged in user
    const user = await decodedToken;

    // pass the the user down to the endpoints here
    request.user = user;

    // pass down functionality to the endpoint
    next();
  } catch (error) {
    response.status(401).json({
      error: new Error('Invalid request - Authentication Error!'),
    });
  }
};

//q: what are alternatives to body parser?
//a: express.json() and express.urlencoded()

// q:example with expess.json() and express.urlencoded()
// a: const express = require('express');
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//a: what is the difference between express.json() and express.urlencoded()
//q: express.json() parses incoming requests with JSON payloads and is based on body-parser.

//q: body-parser example
//a: const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
