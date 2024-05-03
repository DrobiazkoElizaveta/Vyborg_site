const express = require("express");
const router = express.Router();
// const register = require("../controllers/register");
const login = require("../controllers/login");
const entries = require("../controllers/entries");
const landmarks = require("../controllers/landmarks");
const validation = require("../middleware/validate_form");

router.get("/", (req, res) => {
  res.render("home", {
    title: "Главная",
  });
});

router.get("/entries", entries.list);

router.get("/post", entries.form);
router.post("/post", entries.submit);

router.get("/update/:id", entries.updateForm);
router.post("/update/:id", entries.updateSubmit);

router.get("/delete/:id", entries.delete);

router.get("/map", landmarks.list);

router.get("/post", landmarks.form);
router.post("/post", landmarks.submit);

router.get("/update/:id", landmarks.updateForm);
router.post("/update/:id", landmarks.updateSubmit);

router.get("/delete/:id", landmarks.delete);


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
