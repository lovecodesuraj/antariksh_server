
import {sendMail, sendContactMail } from "../middlewares/sendMail.js";
import { Post, Gallery, Event } from "../models/models.js";

export const fetchPosts = async (req, res) => {
    try {
        const result = await Post.find({});
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error })
    }
};

export const addPost = async (req, res) => {
    const body = req.body;
    try {
        const newPost = await Post.craete(body)
        res.status(200).json(newPost);
    } catch (error) {
        res.status(400).json({ error });
    }
}

export const addToGallery = async (req, res) => {
    const image = req.body.photo;
    try {
        const gallery = new Gallery({ image: image });
        await gallery.save();
        res.send("posted successfully");
    } catch (err) {
        res.status(400).json({err});
    }
}

export const fetchGallery = async (req, res) => {
    try {
        const results = await Gallery.find({});
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error });
    }
}

export const addEvent=async (req,res) => {
    const image=req.body.photo;
    try{
        const newEvent = await Event.create({image:image}); 
        res.status(200).json(newEvent);
    }catch(error){
          res.status(400).json({error});
    }
  }

  export const fetchEvents=async (req,res)=>{
    try{
      const results=await Event.find({});
      res.status(200).json(results);
    }
    catch(error){
       res.status(400).json({error})
    }
 }

 export const joiningForm=async(req,res)=>{
    const body=req.body;
    try {
        console.log(body);
        const response=await sendMail(body)
        res.status(200).json({response});
    } catch (error) {
        res.status(400).json({error});
    }
 }
 export const contactForm=async(req,res)=>{
    const body=req.body;
    try {
        const response=await sendContactMail(body);
        res.status(200).json({hello:"hello"});
    } catch (error) {
        res.status(400).json({error});
    }
 }