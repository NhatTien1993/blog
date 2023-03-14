const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars'); // 1 thu vien view engine nodejs
const morgan = require('morgan');
const routes = require('./routes');
const app = express();
const port = 3000;

//HTTP logger
// app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
); // xu ly du lieu khi khi request bang form
app.use(express.json()); // xu ly du lieu khi dung code js gui lieu len sever ( fetch,axios,ajax jquery,..)

//Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log(path.join(__dirname, 'resources/views'))

routes(app); // routes den views

// 127.0.0.1 <=> localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
