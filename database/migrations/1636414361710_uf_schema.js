'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UfSchema extends Schema {
  up () {
    this.create('ufs', (table) => {
      table.increments()
      table.string('nome', 45).notNullable()
      table.string('sigla', 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('ufs')
  }
}

module.exports = UfSchema
