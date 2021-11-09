'use strict'

class Categoria {
  get rules () {
    return {
      nome: 'required|integer'
    }
  }

  get messages(){
    return {
      'required': 'O campo [{{field}}] é obrigatório',
      'integer': 'O campo [{{field}}] deve ser inteiro',
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  } 
}

module.exports = Categoria
