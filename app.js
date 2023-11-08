const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({ success: true, app: "CI CD Cpanel" });
});
app.get("/message/:messsage", (req, res) => {
    const message = req.params;
    res.json({ message });
});

app.listen(5050, () => {
    console.log("Server is running");
});
