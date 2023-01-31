const router = require("express").Router();
// const { useRadioGroup } = require("@mui/material"); 
let Memory = require("../models/memory.model");

router.route("/").get((req, res) => {
    Memory.find().then(memory => res.json(memory)).catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const date = req.body.date;
    console.log(title);
    console.log(content);
    console.log(date);
    const newMemory = new Memory({ title, content, date });

    newMemory.save().then(() => res.json("Memory added lol!")).catch(err => res.status(400).json("Error: " + err));
})

router.route("/:id").delete((req, res) => {
    Memory.findByIdAndDelete(req.params.id).then(() => res.json("Memory Deleted")).catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;