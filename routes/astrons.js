import express from "express";
import { Post, Gallery, Event } from "../models/models.js"
import { fetchPosts, joiningForm,contactForm, addPost,fetchEvents, addToGallery, fetchGallery, addEvent } from "../controllers/index.js";

const router = express.Router();



router.get("/posts", fetchPosts);
router.post("/addPost", addPost);
router.post("/addToGallery", addToGallery)
router.get("/gallery", fetchGallery);
router.post("/event", addEvent);
router.get("/events", fetchEvents);
router.post("/joiningForm",joiningForm);joiningForm,contactForm
router.post("/contactForm",contactForm);


export default router;





