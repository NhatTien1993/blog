class SiteController {
  // [GET] /
  home(req, res) {
    res.render('home'); // render file .hbs ( file handlebars)
  }
  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
