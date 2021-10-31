const {createArticleService, getArticleService, updateArticleService, deleteArticleService} = require('../services/articleService') 
const express = require('express')
const articleRouter = express.Router()
const route = require('../router');

articleRouter.get('/',getArticleService)
articleRouter.post('/',createArticleService)
articleRouter.put('/:id',updateArticleService)
articleRouter.delete('/:id',deleteArticleService)

module.exports = articleRouter;