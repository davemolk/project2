const express = require("express");
const router = express.Router();
const db = require("../models");
const axios = require("axios");

router.get("/", (req, res) => {
  db.kata.findAll().then((foundKata) => {
    res.render("kata/index.ejs", { kataList: foundKata });
  });
});

router.post("/", function (req, res) {
  db.kata.create(req.body).then((createdkata) => {
    res.redirect("/katas");
  });
});
