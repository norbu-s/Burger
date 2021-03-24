const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/api/all", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burger: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/add", (req, res) => {
  burger.create(req.body.name,(result) => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/devour/:id", (req, res) => {
  burger.update([req.body.devoured, req.params.id], condition, (result) => {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

router.delete("/api/devour/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  burger.delete(condition, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burger: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

module.exports = router;
