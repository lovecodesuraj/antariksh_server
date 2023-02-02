import express from "express";
// import Events from "../../client/src/components/home/events/events.jsx";
import generateUrl from "../middleware/imageUrl.js";
import {Post , Gallery , Event} from "../models/models.js"


const router =express.Router();



router.get("/posts",async (req,res)=>{
  const result=await Post.find({});
  // console.log(result);
  res.send(result);
})
router.post("/addPost",async (req,res) => {
    const body=req.body;
    console.log(body)

  // const imageUrl = await generateUrl(photo);
    const post = new Post(body)
    post.save();
    res.status(200);
    // console.log(body)
    // console.log("post saved successfully")

})

router.post("/addToGallery",async (req,res) => {
  const image=req.body.photo;
  // const results=Gallery.find({name:"images"});
  // console.log(results);
  try{
      const gallery =  new Gallery({image:image}); 
      await gallery.save();
      res.send("posted successfully")
  }catch(err){
        console.log(err);
  }
})
 router.get("/gallery", async (req,res)=>{
   
  const results = await Gallery.find({});
  // console.log(results)
  res.json(results);
 })

 router.post("/event",async (req,res) => {
  const image=req.body.photo;
  try{
      const event =  new Event({image:image}); 
      await event.save();
      res.send("posted successfully")
  }catch(err){
        console.log(err);
  }
})

 router.get("/events",async (req,res)=>{
    try{
      const results=await Event.find({});
      res.json(results);
    }
    catch(err){

    }
 })
export default router;





