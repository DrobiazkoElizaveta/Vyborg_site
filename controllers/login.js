const { Admin } = require("../models/models");
exports.form = (req, res) => {
  res.render("loginForm", { title: "Вход" });
};

exports.submit = async (req, res, next) => {
  try {
    const admin = await Admin.findOne({
      where: { email: req.body.loginForm.email },
    });
    console.log(req.body.loginForm);

    if (!admin) {
      console.log("Пользователь не найден");
      return res.redirect("back");
    }
    if (admin.password == req.body.loginForm.password) {
      req.session.userEmail = req.body.loginForm.email;
      console.log("hjsdfkkdfsjdfksj");
      res.redirect("/");
    } else {
      console.log("не верный пароль");
      return res.redirect("back");
    }
  } catch (error) {
    return next(error);
  }
};

exports.logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
};
