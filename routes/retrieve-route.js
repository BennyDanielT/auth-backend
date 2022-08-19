var express = require('express');
var router = express.Router();
var fetchController= require('../controllers/retrieve-controller');
var addController= require('../controllers/add-controller');
var homeController= require('../controllers/home-controller');
const bodyParser = require('body-parser');
const dbConnect = require('../db/dbConnect');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.get('/retrieve-data',fetchController.fetchData);
router.post('/add-data', addController.addData);
router.get('/', homeController.home);
module.exports = router;






