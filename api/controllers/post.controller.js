import prisma from "../lib/prisma.js";
import {ObjectId} from "mongodb";

export const getPosts= async(req,res)=>{
  const query= req.query;
  try{
    const posts= await prisma.post.findMany({
      where:{
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom:parseInt(query.bedroom) || undefined,
        price:{
          gte: parseInt(query.minPrice) ||0 ,
          lte: parseInt(query.maxPrice) ||1000000,
        },
      },
    });
    res.status(200).json(posts);

  }catch(err){
    console.log(err)
    res.status(500).json({message:"Failed to get posts"})
  }
}

// const isValidObjectId = (id) =>{
//   return ObjectId.idValid(id)&& new ObjectId(id).toString()=== id;
// }

export const getPost= async(req,res)=>{
  const id=req.params.id

  // if (!isValidObjectId(postId)){
  //   return res.status(400).json({message:"Invalid post ID"});
  // }
  try{
    const post= await prisma.post.findUnique({
      where:{id},
      include:{
        postDetail:true,
        user:{
          select:{
            username:true,
            avatar:true,
          }
        }
        
      }
    })

    if (!post){
      return res.status(404).json({message:"post not found"});
    }
   
    
    res.status(200).json(post)
  
  }catch(err){
    console.log(err)
    res.status(500).json({message:"Failed to get post"})
  }
}

export const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;

  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,
        postDetail: {
          create: body.postDetail,
        },
      },
    });
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create post" });
  }
};
export const updatePost= async(req,res)=>{
  try{
    res.status(200).json()

  }catch(err){
    console.log(err)
    res.status(500).json({message:"Failed update the posts"})
  }
}

export const deletePost= async(req,res)=>{
  const id= req.params.id;
  const tokenUserId= req.userId;
  try{
     const post= await prisma.post.findUnique({
      where:{id},
     });
if(post.userId !== tokenUserId){
  return res.status(403).json({message:"not Athorized"});
}

await prisma.post.delete({
  where:{id},
})

    res.status(200).json({message:"deleted"})

  }catch(err){
    console.log(err)
    res.status(500).json({message:"Failed to delete"})
  }
}