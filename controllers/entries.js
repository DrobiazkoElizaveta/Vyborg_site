const { Entry } = require("../models/models");

exports.list = async (req, res, next) => {
  const entries = await Entry.findAll();
  const userData = req.user;
  res.render("entries", { title: "Новости", entries: entries, user: userData });
};

exports.form = (req, res) => {
  res.render("post_entry", { title: "Создать новость" });
};

exports.submit = async (req, res, next) => {
  try {
    const data = req.body.entry;

    const entry = {
      title: data.title,
      content: data.content,
      photo: req.body.entry.photo,
    };

    await Entry.create(entry);
    res.redirect("/entries");
  } catch (err) {
    return next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const entryId = req.params.id;

    Entry.destroy({ where: { id: entryId } });
    await res.redirect("/entries");
  } catch (error) {
    return next(error);
  }
};

exports.updateForm = async (req, res) => {
  try {
    const entryId = req.params.id;
    const entry = await Entry.findOne({ where: { id: entryId } });
    await res.render("update_entry", { title: "Изменить новость", entry: entry });
  } catch (error) {
    return next(error);
  }
};

exports.updateSubmit = async (req, res, next) => {
  try {
    const entryId = req.params.id;
    const newData = {
      title: req.body.entry.title,
      content: req.body.entry.content,
      photo: req.body.entry.photo,
    };
    await Entry.update(newData, {
      where: {
        id: entryId,
      },
    });
    await res.redirect("/entries");
  } catch (error) {
    return next(error);
  }
};
