class NewsController {
  // [GET] /news
  index(req, res) {
    res.render('news'); // render file .hbs ( file handlebars)
  }
  // [GET] /detail
  detail(req, res) {
    res.send('detail news');
  }
  show(req, res) {
    res.send('show news');
  }
}
module.exports = new NewsController();
