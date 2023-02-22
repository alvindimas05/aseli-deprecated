const express = require("express"),
bodyParser = require("body-parser"),
fileUpload = require("express-fileupload"),
app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(fileUpload({ limits:5 * 1024 * 1024 }));
app.use("/images", express.static("images"));
app.use((req, res, next) => {
    res.err = (msg) => res.status(400).json({ status:false, msg:msg });
    res.success = (msg) => res.json({ status:true, msg:msg });
    Object.defineProperty(req.body, "check", {
        value:(params) => {
            var body = req.body;
            for(var param of params){
                if(body[param] === undefined || typeof body[param] === typeof undefined){
                    res.err(`Missing parameter "${param}"`);
                    return true;
                }
            }
            return false;
        }, enumerable:false
    });
    next();
});

const user = require("./routes/user"),
post = require("./routes/post");

app.post("/user", user.post);
app.post("/user/login", user.login);

app.post("/post", post.post);
app.post("/post/rill", post.rill);
app.post("/post/fek", post.fek);

module.exports = app;