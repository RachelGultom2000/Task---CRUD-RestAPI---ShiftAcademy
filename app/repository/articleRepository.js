const {Article} = require('../models')

module.exports = {
    articleCreate(param){
        return Article.create(param)
    },

    articleRead(attributes = null,where  = null,pagination = null){
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

        return Article.findAll(options)
    },

    articleUpdate(param,id){
        return Article.update(param, {
            where:{
                id
            }
        })
    },

    articleDelete(id){
        return Article.destroy({
            where : {
                id
            }
        })
    }
}
