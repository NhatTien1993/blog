const newsRouter = require('./news');
const siteRouter = require('./site');

function routes(app) {
  app.use('/news', newsRouter);
  app.use('/', siteRouter); // de duoi cung neu router = "/"

  // // query parameters => truyen du lieu bang method "get" = url. vd: url.../search?key1=value1&key2=values2
  // app.get('/search', (req, res) => {
  //     // console.log(req.query.q)
  //     res.render('search');
  // })
  // app.post('/search', (req, res) => {
  //     console.log(req.body) // cach nhan du lieu phia sever cua pt post
  //     res.send('');
  // })
}
module.exports = routes;
