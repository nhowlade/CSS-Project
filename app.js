const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routeDir = require('./helpers/path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.sendFile(path.join(routeDir, 'views','Error.html'));
});

app.listen(3000);