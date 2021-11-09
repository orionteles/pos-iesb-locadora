'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Filme = use('App/Models/Filme')

/**
 * Resourceful controller for interacting with filmes
 */
class FilmeController {
  
  /**
   * Show a list of all filmes.
   * GET filmes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Filme.query().with('categoria').fetch()
  }


  /**
   * Create/save a new filme.
   * POST filmes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const dados = request.only(['nome', 'ano', 'categoria_id', 'sinopse', 'quantidade'])
    return await Filme.create(dados)
  }

  /**
   * Display a single filme.
   * GET filmes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Filme.findOrFail(params.id)
  }

  /**
   * Update filme details.
   * PUT or PATCH filmes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const filme = await Filme.findOrFail(params.id)
    const dados = request.only(['nome', 'ano', 'categoria_id', 'sinopse', 'quantidade'])

    filme.merge(dados)
    filme.save()

    return filme
  }

  /**
   * Delete a filme with id.
   * DELETE filmes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const filme = await Filme.findOrFail(params.id)
    return filme.delete()
  }
}

module.exports = FilmeController
