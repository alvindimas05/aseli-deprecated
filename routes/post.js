const { User, Post } = require("../mongoose")

// Upload Post : user_id, title, image
async function post(req, res){
    var body = req.body;
    try {
        if(body.check(["user_id", "title"])) return;
        if(!req.files || !req.files.image) return res.err("Image not found!");
        if(!await User.findById(body.user_id)) return res.err("User not found!");

        var image = req.files.image,
        allow = ["image/png", "image/jpeg", "image/gif"];
        if(!allow.includes(image.mimetype)) return res.err("File is not an image!");
        if(image.truncated) return res.err("Image size more than 5 MB!");

        var total = await Post.countDocuments({}) + 1;
        new Post({
            _id:total,
            title:body.title
        }).save();
        await image.mv("images/" + total);

        res.success("Success upload post!");
    } catch(err) {
        res.err(err);
    }
}

const rill = async (req, res) => await rill_fek(req, res, true),
fek = async (req, res) => await rill_fek(req, res, false);

// Rill Fek : user_id, post_id
async function rill_fek(req, res, rill){
    var body = req.body;
    try {
        if(body.check(["user_id", "post_id"])) return;
        var user = await User.findById(body.user_id),
        post_id = body.post_id;

        if(!user) return res.err("User not found!");
        if(!await Post.findById(post_id)) return res.err("Post not found!");

        var inc = { $inc:{} },
        post = {};
        if(rill){
            if(user.rill.includes(post_id)){
                inc.$inc.rill = -1;
                post = { $pull:{ rill:post_id } };
            } else {
                inc.$inc.rill = 1;
                post = { $push:{ rill:post_id } }
            }
        } else {
            if(user.fek.includes(body.post_id)){
                inc.$inc.fek = -1;
                post = { $pull:{ fek:post_id } };
            } else {
                inc.$inc.fek = 1;
                post = { $push:{ fek:post_id } };
            }
        }
        await Post.updateOne({ _id:post_id }, inc);
        await User.updateOne({ _id:body.user_id }, post);

        res.success("Success!");
    } catch(err) {
        res.err(err);
    }
} 
module.exports = {
    post:post,
    rill:rill,
    fek:fek
};