const express = require('express');
const { getAllTags, getPostsByTagName, getPostsByUser } = require('../db');
const tagsRouter = express.Router();

tagsRouter.get('/', async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags
  });

});

tagsRouter.get('/:tagName/posts', async (req, res, next) => {
  // read the tagname from the params
  let tagName = req.params.tagName
  tagName = decodeURIComponent(tagName);
  try {

    const posts = await getPostsByTagName(tagName);

    res.send({
      posts
    });
    // use our method to get posts by tag name from the db
    // send out an object to the client { posts: // the posts }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = tagsRouter;
