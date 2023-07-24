describe('Página de cadastro', () => {
  it('preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    cy.contains('a', 'Register now').click();
    cy.get('[data-test="email"]').type('teste@gmail.com.br')
    cy.get('[data-test="fullName"').type('Teste')
    cy.get('[data-test="registerUserName"').type('testesilva')
    cy.get('[data-test="registerPassword"').type('teste@teste13')
    cy.contains('button','Register').click()
  })
})