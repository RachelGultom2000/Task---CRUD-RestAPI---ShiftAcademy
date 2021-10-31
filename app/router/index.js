const userController = require('../controllers/userController');
const articleController = require('../controllers/articleController');

module.exports = function(app){
    app.use('/api/user', userController)
    app.use('/api/article', articleController)
}

// module.exports = (app, express) => {
//     let router = express.Router();
//     const controller = require('../controllers/userController');

//     router.get('/', controller.getUserService);
//     router.post('/', controller.createUserService);
//     // router.get('/get/:prodiId', controller.get);
//     router.put('/:id/', controller.updateUserService);
//     router.delete('/:id/', controller.deleteUserService);
  
//     app.use('/api/user/', router);
//   }