import upload from "../middleware/upload.js"
import  express  from "express";
const router = express.Router();

router.post("/upload",upload.single("file"),(req,res)=>{
    if(req.file===undefined) return res.send("you must select a file");
    const imageUrl=`http://localhost:8080/file/${req.file.filename}`;
    return res.send(imgUrl);
})

export default  router;