const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burger: data,
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/add", (req, res) => {
    burger.createOne(req.body.name, (res) => {
        res.json({ id: result.insertId });
    });
});

router.post("/devour/:id", (req, res) => {
    burger.updateOne([req.body.devoured, req.params.id], condition, (res) => {
        res.redirect('/');
    });
});

router.delete("/devour/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;
    burger.deleteOne(condition, (res) => {
        res.redirect('/');
    });
});


module.exports = router;