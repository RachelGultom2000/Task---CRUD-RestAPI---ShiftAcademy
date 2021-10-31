const {
  userCreate,
  userRead,
  userUpdate,
  userDelete,
} = require("../repository/userRepository");

module.exports = {
  createUserService(req, res) {
    const param = {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    };
    userCreate(param)
      .then((val) => {
        const response = {
          status: true,
          message: "User successfully created!",
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

  getUserService(req, res) {
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

    userRead(attributes, null, pagination)
      .then((val) => {
        const response = {
          status: true,
          message: "Get all user",
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

  updateUserService(req, res) {
    const id = req.params.id;
    const param = {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    };
    userUpdate(param.id)
      .then((val) => {
        const response = {
          status: true,
          message: "User successfully updated!",
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

  deleteUserService(req, res) {
    const id = req.params.id;
    userDelete(id)
      .then((val) => {
        if (val) {
          const response = {
            status: true,
            message: "User successfully deleted!",
            data: val,
          };
          return res.status(200).json(response);
        } else {
          const response = {
            status: false,
            message: "User failed deleted!",
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
