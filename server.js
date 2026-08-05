const express = require("express");

const app = express();

const port = 3000;
const hostname = '0.0.0.0';

app.get("/", (req, res) => {
    res.send("Hello from ECS EC2 Docker Demo!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

app.listen(port, hostname, () => {
    console.log("Server running");
});