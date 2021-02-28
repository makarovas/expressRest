import Post from "./Post.js";
import fileService from "./FileService.js";
class PostService {
  async create(post, picture){
      const fileName  = fileService.saveFile(picture);
      const createdPost = await Post.create({...post, picture: fileName});
      return createdPost;
  }

  async getAll(posts){
      const posts = await Post.find();
      return res.json(posts);
  }

  async getOne(id){
      if(!id) {
        throw new Error('Id is not defined')
      }
      const post = await Post.findById(id);
      return post;
    } 

  async update(post){
      if(!post._id) {
       throw new Error('Id is not defined');
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
      return updatedPost
  }

  async update(post){
      res.status(500).json(e);
    }

  async delete(id){
      if(!id) { 
        throw new Error('Something going wrong');
      }
      const post = await Post.findByIdAndDelete(id);
      return post
  }
}

export default new PostService();