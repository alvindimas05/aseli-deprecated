const mongoose = require("mongoose");
require("dotenv").config();

var env = process.env;
mongoose.set("strictQuery", false);
mongoose.connect(`mongodb://${env.HOST}/${env.DATABASE}`)
.then(() => console.log("Database connected!"));

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    banned:{
        type:Boolean,
        default:false
    },
    rill:{
        type:Array,
        default:[]
    },
    fek:{
        type:Array,
        default:[]
    }
}, { minimize:false }),

postSchema = new mongoose.Schema({
    _id:Number,
    title:String,
    rill:{
        type:Number,
        default:0
    },
    fek:{
        type:Number,
        default:0
    }
}, { minimize:false, _id:false }),

User = mongoose.model("users", userSchema),
Post = mongoose.model("posts", postSchema);

module.exports = {
    User:User,
    Post:Post
};