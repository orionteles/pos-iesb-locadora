'use strict'

class Filme {
  get rules () {
    return {
      nome: 'required',
      ano: 'integer',
      quantidade: 'required|integer',
      categoria_id: 'required|integer',
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

  get validateAll(){
    return true
  }

}

module.exports = Filme
