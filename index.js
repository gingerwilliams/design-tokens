
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const fs = require('fs');

const token = ('./token-conversion');


const app = express();

//Handlebars Middleware
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'layout'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//server
app.set('port', 3000);

//server
//Server listener -- below scripts
app.listen(app.get('port'), function () {
    console.log('Server running at ' + app.get('port'));
});