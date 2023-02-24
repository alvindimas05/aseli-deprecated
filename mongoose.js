const mongoose = require("mongoose");
require("dotenv").config();

var env = process.env;
mongoose.set("strictQuery", false);
mongoose.connect(`mongodb://${env.HOST}/${env.DATABASE}`)
.then(() => console.log("Database connected!"));

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    description:{
        type:String,
        default:"Insert description here bruh"
    },
    profile:{
        type:Boolean,
        default:false
    },
    coolpown:{
        type:Boolean,
        default:false
    },
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
    username:String,
    isImage:Boolean,
    category:Array,
    rill:{
        type:Number,
        default:0
    },
    fek:{
        type:Number,
        default:0
    }
}, { minimize:false, _id:false }),

categorySchema = new mongoose.Schema({
    name:String,
    total:{
        type:Number,
        default:1
    }
}),

User = mongoose.model("users", userSchema),
Post = mongoose.model("posts", postSchema),
Category = mongoose.model("categories", categorySchema);

module.exports = {
    User:User,
    Post:Post,
    Category:Category
};