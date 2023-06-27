var express = require('express');
var router = express.Router();
var fetchController = require('../controllers/retrieve-controller');
var addController = require('../controllers/add-controller');
var homeController = require('../controllers/home-controller');
var updateController = require('../controllers/update-controller');
var addUserController = require('../controllers/add-user-controller');
var loginController = require('../controllers/login-controller');
var dropDownController = require('../controllers/dropdown-controller');
const bodyParser = require('body-parser');
const dbConnect = require('../db/dbConnect');
const auth = require('../auth');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  );
  next();
});

router.get('/', homeController.home);
router.get('/retrieve-data', auth, fetchController.fetchData);
router.post('/add-data', addController.addData);
router.put('/update-data', updateController.updateData);
router.post('/register-user', addUserController.addUser);
router.post('/login', loginController.login);
router.get('/provinces',dropDownController.getProvinces);
router.get('/regions',dropDownController.getRegions);
router.get('/stores',dropDownController.getStores);
router.get('/brands',dropDownController.getBrands);
router.get('/products',dropDownController.getProducts);


router.get('/free-endpoint', (request, response) => {
  response.json({ message: 'You are free to access me anytime' });
});

// authentication endpoint
router.get('/auth-endpoint', auth, (request, response) => {
  response.json({ message: 'You are authorized to access me' });
});

module.exports = router;
