const { Landmark } = require("../models/models");

exports.list = async (req, res, next) => {
  const landmarks = await Landmark.findAll();
  res.render("map", {
    title: "Интерактивная карта",
    landmarks: landmarks,
  });
};

exports.form = (req, res) => {
  res.render("post_map", { title: "Добавить достопримечательность" });
};

exports.submit = async (req, res, next) => {
  try {
    const data = req.body.landmark;
    await Landmark.create(data);
    res.redirect("/map");
  } catch (err) {
    return next(err);
  }
};

