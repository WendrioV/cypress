import Cadastro from "../support/pages/cadastro/pagina-cadastro"
describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
  })

  const usuarios = require('../fixtures/usuarios.json')
  usuarios.forEach(usuario => {
    it('preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

      
      Cadastro.acessarPaginaDeCadastro();
      Cadastro.preencherFormulario();
      Cadastro.submeterCadastro();
    })
  })

})