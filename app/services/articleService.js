const {
    articleCreate,
    articleRead,
    articleUpdate,
    articleDelete,
  } = require("../repository/articleRepository");
  
  module.exports = {
    createArticleService(req, res) {
      const param = {
        title: req.body.title,
        description: req.body.description,
        // name: req.body.name,
        userID : req.body.userID,
      };
      articleCreate(param)
        .then((val) => {
          const response = {
            status: true,
            message: "Article successfully created!",
            data: val,
          };
          return res.status(200).json(response);
        })
        .catch((err) => {
          const response = {
            status: false,
            message: err.message,
          };
          return res.status(400).json(response);
        });
    },
  
    getArticleService(req, res) {
      const attributes = req.body.attributes
      const page = req.query.page
  
      let pagination = null
  
      if(page != null){
          // page = 1,offset 0 limit 5; page 2, offset 5 limit 5
          pagination = {
              limit : 5,
              offset : (parseInt(page) != 1 ? (parseInt(page) - 1) * 5 : 0)
          }
      }
      // const where = {
      //   email: "rachel@gmail.com",
      // };
  
      articleRead(attributes, null, pagination)
        .then((val) => {
          const response = {
            status: true,
            message: "Get all articles",
            data: val,
          };
          return res.status(200).json(response);
        })
        .catch((err) => {
          const response = {
            status: false,
            message: err.message,
          };
          return res.status(400).json(response);
        });
    },
  
    updateArticleService(req, res) {
      const id = req.params.id;
      const param = {
        title: req.body.title,
        description: req.body.description,
        // name: req.body.name,
        userID : req.body.userID,
      };
      articleUpdate(param.id)
        .then((val) => {
          const response = {
            status: true,
            message: "Article successfully updated!",
            data: val,
          };
          return res.status(200).json(response);
        })
        .catch((err) => {
          const response = {
            status: false,
            message: err.message,
          };
          return res.status(400).json(response);
        });
    },
  
    deleteArticleService(req, res) {
      const id = req.params.id;
      articleDelete(id)
        .then((val) => {
          if (val) {
            const response = {
              status: true,
              message: "Article successfully deleted!",
              data: val,
            };
            return res.status(200).json(response);
          } else {
            const response = {
              status: false,
              message: "Article failed deleted!",
              data: val,
            };
            return res.status(200).json(response);
          }
        })
        .catch((err) => {
          const response = {
            status: false,
            message: err.message,
          };
          return res.status(400).json(response);
        });
    },
  };
  