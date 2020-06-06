const express = require("express");
const app = express();
const PORT=3000
app.use("/", express.static("./public"));

//Middleware to set cache control headers
app.use("/cache", function (req, res, next) {
    res.set('Cache-Control', `public, max-age=31557600, s-maxage=31557600`); 
    next()
})
app.use("/cache", express.static("./cache"))

app.listen(PORT, function () {
    console.log(PORT)
})