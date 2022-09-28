const express = require('express');
const { getAllPosts } = require('../db');
const postsRouter = express.Router();

postsRouter.use((req, res) => {
    getAllPosts();
    
    res.send({
        posts: []
      });

  });


module.exports = postsRouter;
