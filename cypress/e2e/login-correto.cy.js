describe('Página de Login', () => {
    it('Verificar login', () => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
      
      cy.get('[data-test="loginUserName"]').type('testesilva')
      cy.get('[data-test="loginPassword"]').type('teste@teste13')
      cy.contains('button','login').click()
    })
  })