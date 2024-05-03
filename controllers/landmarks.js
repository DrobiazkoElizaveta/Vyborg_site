const Landmark = require("../models/landmark");

exports.list = (req, res, next) => {
    Landmark.selectAll((err, landmarks) => {
        if (err) return next(err);
        res.render("map", { title: "Карта с достопримечательностями", landmarks: landmarks });
    });
};

exports.form = (req, res) => {
    res.render("post_map", { title: "Добавить достопримечательность" });
};

exports.submit = (req, res, next) => {
    try {
        const data = req.body.landmark;
        Landmark.create(data);
        res.redirect("/map");
    } catch (err) {
        return next(err);
    }
};

exports.delete = (req, res, next) => {
    const landmarkId = req.params.id;

    Landmark.delete(landmarkId, (err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/map");
    });
};

exports.updateForm = (req, res) => {
    const landmarkId = req.params.id;
    Landmark.getLandmarkById(landmarkId, (err, landmark) => {
        if (err) {
            return res.redirect("/map");
        }
        res.render("update_map", { title: "Изменить достопримечательность", landmark: landmark });
    });
};

exports.updateSubmit = (req, res, next) => {
    const landmarkId = req.params.id;
    const newData = {
        latitude: req.body.landmark.latitude,
        longitude: req.body.landmark.longitude,
        title: req.body.landmark.title,
        description: req.body.landmark.description,
        main_image: req.body.landmark.main_image,
        description_image: req.body.landmark.description_image
    };

    Landmark.update(landmarkId, newData, (err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/map");
    });
};
