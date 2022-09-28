const express = require('express');
const { getAllTags } = require('../db');
const tagsRouter = express.Router();

tagsRouter.use((req, res) => {
    getAllTags();
    
    res.send({
        tags: []
      });

  });


module.exports = tagsRouter;
