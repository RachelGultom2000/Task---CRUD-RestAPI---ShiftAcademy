const userController = require('../controllers/userController');
const articleController = require('../controllers/articleController');

module.exports = function(app){
    app.use('/api/user', userController)
    app.use('/api/article', articleController)
}