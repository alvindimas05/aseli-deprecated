const { User } = require("../mongoose");

// Login : username, password
async function login(req, res){
    var body = req.body;
    try {
        if(body.check(["username", "password"])) return;

        var user = await User.findOne({ username:body.username, password:body.password });
        if(!user) return res.success("Wrong username or password!");

        res.success(user._id);
    } catch(err) {
        res.err(err);
    }
}
// Create Account : username, password, vpassword
async function post(req, res){
    var body = req.body;
    try {
        if(body.check(["username", "password", "vpassword"])) return;
        if(body.password !== body.vpassword) return res.err("Password are not the same!");

        var user = await User.findOne({ username:body.username });
        if(user) return res.err("Username already used!");

        user = new User({
            username:body.username,
            password:body.password
        });
        user.save();
        res.success(user._id);
    } catch(err) {
        res.err(err);
    }
};

module.exports = {
    login:login,
    post:post
};