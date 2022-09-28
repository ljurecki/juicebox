const express = require('express');
const { getAllPosts, createPost } = require('../db');
const postsRouter = express.Router();

const { requireUser } = require('./utils');

postsRouter.post('/', requireUser, async (req, res, next) => {
  const {title, content, tags = "" } = req.body;

  const tagArr = tags.trim().split(/\s+/)
  const postData = {authorId, title, content, tagArr};

  // only send the tags if there are some to send
  if (tagArr.length) {
    postData.tags = tagArr;
  }

  try {
    // add authorId, title, content to postData object
    const post = await createPost(postData);
    // this will create the post and the tags for us
    res.send({ post });
    // otherwise, next an appropriate error object 
  } catch ({ name, message }) {
    next({ name, message });
  }
});

postsRouter.use((req, res) => {
    getAllPosts();
    
    res.send({
        posts: []
      });

  });


module.exports = postsRouter;


