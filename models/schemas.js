import { Schema } from "mongoose";
const postSchema = new Schema({
    title:String,
    details:String,
    photo:String,
    date:""
})

const gallerySchema= new Schema({
    image:String,
})
const eventsSchema= new Schema({
    image:String,
})
export {postSchema , gallerySchema ,eventsSchema}