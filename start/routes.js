'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/categorias', 'CategoriaController')
  .apiOnly()
  .validator(new Map([
    [['store', 'update'], 'Categoria']
  ]))

Route.resource('/filmes', 'FilmeController')
  .apiOnly()
  .validator(new Map([
    [['store', 'update'], 'Filme']
  ]))



Route.resource('/ufs', 'UfController').apiOnly()
Route.resource('/municipios', 'MunicipioController').apiOnly()
Route.resource('/clientes', 'ClienteController').apiOnly()
Route.resource('/locacoes', 'LocacaoController').apiOnly()