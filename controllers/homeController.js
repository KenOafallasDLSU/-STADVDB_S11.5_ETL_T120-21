exports.renderHome = (req, res) => {
  res.render('home', {
    pageCSS: "homeCSS",
    pageJS: "homeJS",
    pageTitle: "ETL",
    navbarTitle: "STADVDB S11 Group 5 ETL Tool"
  })
}