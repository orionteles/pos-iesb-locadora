'use strict'

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Categoria = use('App/Models/Categoria')

class CategoriaSeeder {
  async run () {
    await Categoria.createMany([
      {nome: 'Terror'},
      {nome: 'Suspense'},
      {nome: 'Romance'},
      {nome: 'Infantil'},
      {nome: 'Ação'},
    ])
  }
}

module.exports = CategoriaSeeder
