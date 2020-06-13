const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const categoryRoutes = require("./routes/category");
const taskRoutes = require("./routes/task");

app.get("/", (req,res) => {
    res.send("Hello from node");
});

app.use(cors());
app.use(bodyParser.json());

//Routes
app.use("/api/category", categoryRoutes);
app.use("/api/task", taskRoutes);

app.listen(8000,() =>{
    console.log("Server is running");
});
