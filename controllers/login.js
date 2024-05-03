
const Admin = require("../models/admin");
exports.form = (req, res) => {
  res.render("loginForm", { title: "Вход" });
};

exports.submit = (req, res, next) => {
  Admin.authenticate(req.body.loginForm, (error, data) => {
    if (error) return next(error);
    if (!data) {
      console.log("Имя или пароль неверный");
      res.redirect("back");
    } else {
      req.session.adminId = data.id;
      res.redirect("/");
    }
  });
};

 exports.logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
};
