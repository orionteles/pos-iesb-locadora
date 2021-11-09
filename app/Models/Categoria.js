'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categoria extends Model {

    filmes(){
        return this.hasMany('App/Models/Filme')
                   .select(['id', 'nome', 'ano', 'sinopse', 'categoria_id'])
    }
}

module.exports = Categoria
