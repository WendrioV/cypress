describe('Página de Login', () => {
  beforeEach(() =>{
  cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
})
    it('Verificar login', () => {
      cy.login('Wendrio','Teste@123');
    })
  })