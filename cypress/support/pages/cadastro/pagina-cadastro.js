const el = require('./elements').elements;

class cadastro
{
    acessarPaginaDeCadastro(){
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
        cy.get('[data-test="register"]').click();
    }

    preencherFormulario(){
        cy.get('[data-test="email"]').type('lll@gmail.com')
        cy.get('[data-test="fullName"').type('Teste Teste')
        cy.get('[data-test="registerUserName"').type('llll')
        cy.get('[data-test="registerPassword"').type('lllslslls')
    }
    submeterCadastro(){
        cy.get('[data-test="btnRegister"]').click()
    }
}

export default new cadastro();