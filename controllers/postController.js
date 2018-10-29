const mongoose = require('mongoose');
const Post = mongoose.model('posts');
const Tag = mongoose.model('tags');

class PostController {
  async addPost(post) {
    const newPost = new Post(post);

    try {
      await newPost.save();
      this.addTags(post.tags);
      return newPost;
    } catch(error) {
      return { error };
    }
  }

  async posts() {
    try {
      const posts = await Post.find({});
      return posts;
    } catch(error) {
      return { error };
    }
  }

  async post(_id) {
    try {
      const post = await Post.findOne({ _id });
      return post;
    } catch(error) {
      return { error };
    }
  }

  async vote(_id, vote, user) {
    try {
      const post = await Post.findOne({ _id });

      post.votes++;
      post.save();

      user.votes.push({ post, vote });
      user.save();

      return;
    } catch(error) {
      return { error };
    }
  }

  async addTags(tags) {
    try {
      await Tag.insertMany(tags.map(tag => ({ name: tag })));
    } catch(err) {
      console.log(err);
    }
  }

  async tags(tags) {
    try {
      return await Post.find({ tags: { $in: tags } });
    } catch(err) {
      return err;
    }
  }

  async findTags(name) {
    try {
      return await Tag.find({ name });
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = new PostController()
