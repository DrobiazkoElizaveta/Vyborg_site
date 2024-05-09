const { Admin } = require("../models/models");

module.exports = async function (req, res, next) {
  try {
    if (req.session.userEmail) {
      const admin = await Admin.findOne({
        where: { email: req.session.userEmail },
      });
      if (!admin) return next(new Error("User not found"));
      if (admin) {
        req.user = res.locals.user = admin;
      }
    }
    next();
  } catch (error) {
    return next(error);
  }
};
