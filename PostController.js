import Post from './Post.js';

class PostController {
  async create(req, res){
    try {
      const {author, title, content, picture} = req.body;
      const post = await Post.create({
        author, title, content, picture
      })
      res.status(200).json(post)
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res){
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res){
     try {
      const {id} = req.params;
      if(!id) {
        res.status(400).json({message: 'Id required'})
      }
      const post = await Post.findById(id);
      return res.json(post)
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res){
    try {
      const post = req.body;
      if(!post._id) {
        res.status(400).json({message: 'Id is not defined'})
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
      return res.json(updatedPost)

    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res){
    try {

    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res){
    try {
      const {id} = req.params;
      if(!id) {
        res.status(400).json({message: 'Something going wrong'})
      }
      const post = await Post.findByIdAndDelete(id);
      return res.json(post)
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();