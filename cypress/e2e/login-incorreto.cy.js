describe('Página de Login', () => {
  beforeEach(()=>{
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')

    cy.intercept('POST', 'https://alurapic-api.onrender.com/user/login',{
      statusCode: 400
    }).as('stubPost')
  })

    it('Verificar mensagem de campos obrigatórios', () => {
    
      cy.contains('User name is required').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })

    it('deve falhar mesmo se os campos sejam preenchidos corretamente', () => {
      cy.login('teste','testeTeste')
      cy.wait('@stubPost')
    })
  })