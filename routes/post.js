const { User, Post, Category } = require("../mongoose");

// Upload Post : user_id, title, image, category
async function post(req, res){
    var body = req.body;
    try {
        if(body.check(["user_id", "title", "category"])) return;
        if(!req.files || !req.files.image) return res.err("Image not found!");

        body.category = body.category.replace(" ", "");
        var user = await User.findById(body.user_id);
        if(!user) return res.err("User not found!");
        if(user.coolpown) return res.err("Cooldown...");

        var image = req.files.image, isImg = false, ext = image.name.split(".");
        allowMime = ["image/png", "image/jpeg", "image/gif"],
        allowExt = ["jpg", "jpeg", "png", "gif"];

        ext = ext[ext.length - 1];
        if(allowMime.includes(image.mimetype) && allowExt.includes(ext)) isImg = true;
        if(!isImg && image.mimetype !== "video/mp4" && ext !== "mp4") return res.err("File is not accepted!");

        if(image.truncated) return res.err("Image size more than 5 MB!");
        var total = await Post.countDocuments({}) + 1;
        new Post({
            _id:total,
            title:body.title,
            username:user.username,
            category:body.category.split(","),
            isImage:isImg
        }).save();

        await User.updateOne({ _id:body.user_id }, { coolpown:true });
        setTimeout(async () => await User.updateOne({ _id:body.user_id }, { coolpown:false }), 10 * 60 * 1000);
        await image.mv("files/" + total);

        res.success("Success upload post!");

        body.category.split(",").forEach(async cat => {
            var cate = await Category.findOne({ name:cat });
            if(!cate) new Category({ name:cat }).save();
            else await Category.updateOne({ name:cat }, { $inc:{ total:1 } });
        });
    } catch(err) {
        res.err(err);
    }
}

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

async function get_post(res, page, search, category){
    if(category) category = category.split(",");
    try {
        var posts = await Post.find({}, { __v:0 }).sort({ _id:-1 }),
        limit = 5, rposts = [];

        if(page > 1) rposts.slice(0, posts.length - (limit * (page - 1))); 
        for(var post of posts){
            if(rposts.length === limit - 1) break;
            if(search && post.title.toLowerCase().includes(search.toLowerCase())) rposts.push(post);
            else if(category && category.every(cat => post.category.includes(cat))) rposts.push(post);
            else if(!search && !category) rposts.push(post);
        }

        res.json({ status:true, next:limit > 0, data:rposts });
    } catch(err) {
        res.err(err);        
    }
}

// Get Post : page
const get = async (req, res) => await get_post(res, req.query.page || 1, req.query.search || false, req.query.category || false),
rill = async (req, res) => await rill_fek(req, res, true),
fek = async (req, res) => await rill_fek(req, res, false);

module.exports = {
    post:post,
    get:get,
    rill:rill,
    fek:fek
};