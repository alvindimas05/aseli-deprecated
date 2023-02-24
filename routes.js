const express = require("express"),
bodyParser = require("body-parser"),
fileUpload = require("express-fileupload"),
app = express();

app.use(bodyParser.json());
app.set("json spaces", 4);
app.use(bodyParser.urlencoded({ extended:true }));
app.use(fileUpload({ limits:5 * 1024 * 1024 }));
app.use("/files", express.static("files"));
app.use((req, res, next) => {
    function check(params){
        var body = req.body;
        for(var param of params){
            if(body[param] === undefined || typeof body[param] === typeof undefined){
                res.err(`Missing parameter "${param}"`);
                return true;
            }
        }
        return false;
    }
    res.err = (msg) => res.status(400).json({ status:false, msg:msg });
    res.success = (data) => res.json({ status:true, data:data });
    Object.defineProperty(req.body, "check", { value:check, enumerable:false });
    Object.defineProperty(req.query, "check", { value:check, enumerable:false });
    next();
});

const user = require("./routes/user"),
post = require("./routes/post");

app.post("/user", user.post);
app.post("/user/login", user.login);
app.get("/user/profile", user.get_profile);
app.post("/user/profile", user.post_profile);

app.get("/post", post.get);
app.post("/post", post.post);
app.post("/post/rill", post.rill);
app.post("/post/fek", post.fek);

module.exports = app;