'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Filme extends Model {

    categoria(){
        return this.belongsTo('App/Models/Categoria')
    }

}

module.exports = Filme
