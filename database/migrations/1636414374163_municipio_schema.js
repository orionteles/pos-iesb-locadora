'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MunicipioSchema extends Schema {
  up () {
    this.create('municipios', (table) => {
      table.increments()
      table.string('nome', 100)
      table.integer('uf_id').unsigned().references('id').inTable('ufs').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('municipios')
  }
}

module.exports = MunicipioSchema
