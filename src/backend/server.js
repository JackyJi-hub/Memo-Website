const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 4100;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
app.use(cors())

// Connect to mongodb
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully")
});

// const memory = new Memory({
//     title: "Some memory",
//     content: "ok"
// })

// app.get("/", function(req, res){
//     //send back data
//     res.sendFile("Hello");
// });
const memoryRouter = require("./routes/memories");

app.use("/memories", memoryRouter);

app.listen(port, function(){
    console.log("Server running on port " + port);
})