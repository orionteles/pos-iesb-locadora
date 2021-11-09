'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FilmeSchema extends Schema {
  up () {
    this.create('filmes', (table) => {
      table.increments()
      table.string('nome', 200)
      table.integer('ano')
      table.integer('quantidade')
      table.string('sinopse', 2000)
      table.integer('categoria_id').unsigned().references('id').inTable('categorias').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('filmes')
  }
}

module.exports = FilmeSchema
