import prisma from "../config/db.config.js";
// import axios from "axios";

class PostController{
    static async index(req,res){
        try {
            const posts = await prisma.post.findMany({});
            return res.status(200).json(posts);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    static async store(req,res){
       try {
         const authUser = req.user;
         const {title, content} = req.body;
 
         const post = await prisma.post.create({
             data:{
                 title,
                 content,
             }
         });
 
         return res.status(201).json(post);
       } catch (error) {
        return res.status(500).json({message: error.message});
       }

    }
}

export default PostController;