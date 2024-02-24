import blogModel from "../../../DB/model/blog.model.js";
import userModel from "../../../DB/model/user.model.js";

export const getBlog = async(req,res) => {
    const blogs = await blogModel.findAll({
        include:{
            model: userModel,
            attributes:['id', 'name']
        },
        attributes:{
            exclude: ["UserId", 'updateAt']
        }
    });
    return res.json({message: "Blogs", blogs})
}

export const addBlog = async(req, res)=>{
    try{
       const {title, body, UserId} = req.body;
       const blog = await blogModel.create({
        title, body, UserId
       });
       return res.json({message: 'success'});
    }catch(error){
       return res.json({message : "error", error: error.stack})
    }
}