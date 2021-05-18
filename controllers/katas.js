const express = require("express");
const router = express.Router();
const db = require("../models");
const axios = require("axios");

// list of all completed codewars katas
router.get("/all", (req, res) => {
  axios
    .get(
      "https://www.codewars.com/api/v1/users/davemolk/code-challenges/completed?"
    )
    .then((response) => {
      // console.log("full response: ", response);
      let myKatas = response.data.data;
      console.log("here is response.data.data:", myKatas);
      res.render("index", { myKatas });
    });
});

// list of all katas in database
router.get("/", (req, res) => {
  db.kata.findAll().then((foundKata) => {
    res.render("katas/index", { kataList: foundKata });
  });
});

// create a kata
router.post("/", function (req, res) {
  db.kata.create(req.body).then((createdkata) => {
    res.redirect("/katas");
  });
});

module.exports = router;

// app.get("/results", (req, res) => {
//   axios
//     .get("https://www.codewars.com/api/v1/code-challenges/valid-braces")
//     .then((response) => {
//       // console.log(response);
//       const url = response.data.url;
//       console.log("url is ", url);
//       const tags = response.data.tags;
//       console.log("tags are ", tags);
//       const descript = response.data.description;
//       console.log("descript is ", descript);
//       // console.log(responseData);
//       res.render("results", {
//         urlCW: url,
//         tagsCW: tags,
//         descriptCW: descript,
//       });
//     });
// });
