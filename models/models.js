import mongoose from "mongoose";
import { postSchema , gallerySchema ,eventsSchema } from "./schemas.js";

const Post=mongoose.model('Post',postSchema);
const Gallery=mongoose.model('Gallery',gallerySchema);
const Event=mongoose.model("Event",eventsSchema);

export { Gallery , Post , Event}