const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.post("/add", (req, res) => {
    burger.create(req.body.burger_name, (result) => {
        res.json({ result });
    });
});

router.put("/devour/:id", (req, res) => {
    // const condition = `id = ${req.params.id}`;

    burger.update(true, req.params.id, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

router.delete("/devour/:id", (req, res) => {
    // const condition = `id = ${req.params.id}`;

    burger.update(false, req.params.id, (result) => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

router.get("/", (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            allBurgers: data,
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

module.exports = router;