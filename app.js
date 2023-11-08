const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({ success: true, app: "CI CD Cpanel" });
});

app.listen(8080, () => {
    console.log("Server is running");
});
