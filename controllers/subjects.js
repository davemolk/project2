const express = require("express");
const router = express.Router();
const db = require("../models");

// list of all subjects in database
// router.get("/", (req, res) => {
//   db.subject.findAll().then((foundSubject) => {
//     res.render("subjects/index", { subjectList: foundSubject });
//   });
// });

router.get("/", async function (req, res) {
  const subject = await db.subject.findAll();
  res.render("subjects/index", { subject });
});

module.exports = router;
