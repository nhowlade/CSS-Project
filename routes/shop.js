const path = require('path');
const routeDir = require('../helpers/path');
const express= require('express');
const { route } = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(routeDir,'views', 'shop.html'));
});


module.exports = router;