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
// Add or Edit user profile : user_id, profile, description
async function post_profile(req, res){
    var body = req.body,
    profile = req.files && req.files.profile ? req.files.profile : false;
    try {
        if(body.check(["user_id", "description"])) return;
        var user = await User.findById(body.user_id);
        if(!user) return res.err("User not found!");

        if(profile){
            var ext = image.name.split(".");
            allowMime = ["image/png", "image/jpeg", "image/gif"],
            allowExt = ["jpg", "jpeg", "png", "gif"];

            ext = ext[ext.length - 1];
            if(image.truncated) return res.err("Image size more than 5 MB!");
            if(allowMime.includes(image.mimetype) && allowExt.includes(ext))
            await profile.mv("profiles/" + user.username);
        }

        await User.updateOne({ _id:body.user_id }, { profile:!!profile || user.profile, description:body.description });
    } catch(err) {
        res.err(err);
    }
}
// Get user profile : user_id || username
async function get_profile(req, res){
    var query = req.query;
    try {
        var user = query.user_id || query.username,
        opt = {};
        if(query.user_id) opt._id = query.user_id;
        else if(query.username) opt.username = query.username;

        if(!user) return res.err("Username or User ID missing!");

        user = await User.findOne(opt, { _id:0, password:0, coolpown:0, __v:0 });
        res.success(user);
    } catch(err) {
        res.err(err);
    }
}
module.exports = {
    login:login,
    post:post,
    post_profile:post_profile,
    get_profile:get_profile
};