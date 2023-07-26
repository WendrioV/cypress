describe('Api alurapic', () => {
    /*   it('Dados da API', () => {
        cy.request({
            method:'POST',
            url:'https://alurapic-api.onrender.com/user/login',
            body: Cypress.env()
        }).then((res)=> {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.propety('id')
            expect(res.body.id).to.be.equal(4)
        })
    })
    */
    it('Fotos do usuário', () => {
        const tempoEsperado = Math.random() * 50;
        cy.request({
            method:'GET',
            url:'https://alurapic-api.onrender.com/user/photos',
        }).then((res)=> {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.propety('description')
            expect(res.body[0].description).to.be.equal('porquinho')
            expect(res.duration).to.be.lte(tempoEsperadof)
        })
    })
  })