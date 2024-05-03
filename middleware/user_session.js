const Admin = require("../models/admin");

module.exports = function (req, res, next) {
  if (!req.session.userEmail) return next();
  Admin.findByLogin(req.session.userEmail, (error, userData) => {
    if (error) return next(error);
    if (userData) {
      req.user = res.locals.user = userData;
    }
    next();
  });
};
