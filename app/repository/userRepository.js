const {User} = require('../models')

module.exports = {
    userCreate(param){
        return User.create(param)
    },

    userRead(attributes = null,where  = null,pagination = null){
        const options = {};
        if(attributes != null){
            options.attributes = attributes;
        }

        if(where != null){
            options.where = where;
        }

        if(pagination != null){
            options.limit = pagination.limit;
            options.offset = pagination.offset;
            
        }

        return User.findAll(options)
    },

    userUpdate(param,id){
        return User.update(param, {
            where:{
                id
            }
        })
    },

    userDelete(id){
        return User.destroy({
            where : {
                id
            }
        })
    }
}
