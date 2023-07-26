
 Cypress.Commands.add('login', (name, password) => { 
    cy.get('[data-test="loginUserName"]').type('name');
    cy.get('[data-test="loginPassword"]').type('assword');
    cy.contains('button','login').click()
  })
