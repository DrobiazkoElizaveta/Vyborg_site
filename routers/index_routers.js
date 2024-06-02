const express = require("express");
const router = express.Router();
const login = require("../controllers/login");
const entries = require("../controllers/entries");
const landmarks = require("../controllers/landmarks");

router.get("/", (req, res) => {
  res.render("home", {
    title: "Главная",
  });
});

router.get("/entries", entries.list);

router.get("/post_entry", entries.form);
router.post("/post", entries.submit);

router.get("/update_entry/:id", entries.updateForm);
router.post("/update/:id", entries.updateSubmit);

router.get("/delete/:id", entries.delete);

router.get("/map", landmarks.list);

router.get("/post_map", landmarks.form);
router.post("/post_map", landmarks.submit);

router.get("/login", login.form);
router.post("/login", login.submit);
router.get("/logout", login.logout);

router.get("*", (req, res, next) => {
  const error = new Error("Страница не найдена");
  error.statusCode = 404;
  next(error);
});

router.use((error, req, res, next) => {
  res
    .status(error.statusCode || 500)
    .render("error", { title: "Ошибка", message: error.message });
});

module.exports = router;
