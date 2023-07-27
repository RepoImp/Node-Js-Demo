const User = require("../models/user"); //Database Model
const Post = require("../models/post");
let { MSG } = require("../helper/constant");
const StatusCodes = require("http-status");
const CustomErrorHandler = require("../helper/CustomErrorHandler");

class PostsService {
  async createPost(userId, body) {
    const obj = {
      user: userId,
      desc: body.desc,
      img: body.img,
    };
    const newPost = await new Post(obj).save();

    return newPost;
  }

  async getPosts(params) {
    let posts;
    let query = {};

    if (params.forUser) query.user = params.forUser;

    posts = await Post.find(query);
    if (!posts.length) throw CustomErrorHandler.notFound(MSG.POST_NOT_FOUND);
    return posts;
  }

  async getPostById(id) {
    const post = await Post.findById(id);

    if (!post) throw CustomErrorHandler.notFound(MSG.POST_NOT_FOUND);
    return post;
  }

  async updatePost(id, userId, body) {
    const post = await Post.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!post) throw CustomErrorHandler.notFound(MSG.POST_NOT_FOUND);
    return post;
  }

  async deletePost(id, userId) {
    const post = await Post.findByIdAndDelete(id);

    if (!post) throw CustomErrorHandler.notFound(MSG.POST_NOT_FOUND);
    return post;
  }

  async likePost(id, userId) {
    let post = await Post.findById(id);
    if (!post) throw CustomErrorHandler.notFound(MSG.POST_NOT_FOUND);

    if (post.likes.includes(userId))
      throw CustomErrorHandler.badRequest(MSG.POST_LIKED);

    post.likes.unshift(userId);
    post = await post.save();

    return post;
  }

  async unlikePost(id, userId) {
    let post = await Post.findById(id);
    if (!post) throw CustomErrorHandler.notFound(MSG.POST_NOT_FOUND);

    if (!post.likes.includes(userId))
      throw CustomErrorHandler.badRequest(MSG.POST_NOT_LIKED);

    post.likes.splice(post.likes.indexOf(id, 1));
    post = await post.save();

    return post;
  }

  async getTimelinePosts(userId) {
    let user = await User.findById(userId);
    const userPosts = await Post.find({ user: userId });

    const friendPosts = await Promise.all(
      user.following.map((friendId) => {
        return Post.find({ user: friendId });
      })
    );

    return userPosts.concat(...friendPosts);
  }
}

module.exports = PostsService;
