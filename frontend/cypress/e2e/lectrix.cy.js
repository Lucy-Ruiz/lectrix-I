describe('all lectrix tests', () => {
    describe('test for add review', () => {
        it('Add a review to the current book and it will show up', () => {
            cy.visit('http://localhost:3000/login')
            cy.get(':nth-child(1) > input').type('user1')
            cy.get(':nth-child(2) > input').type('password1@')
            cy.get('.form > button').click()
            cy.get('[data-cy="searchField"]').type("python")
            cy.get('form > button').click()
            cy.get('.input-review').type('review Cypress')
            cy.get('.form-group > button').click()
            cy.get(':nth-child(7) > tbody > :nth-child(5) > :nth-child(2)').should('have.text', 'review Cypress')
        })
    })
    describe('test for add book to bookshelf', () => {
        it('Add a new book to bookshelf of current user', () => {
            cy.visit('http://localhost:3000/login')
            cy.get(':nth-child(1) > input').type('user1')
            cy.get(':nth-child(2) > input').type('password1@')
            cy.get('.form > button').click()
            cy.get('[data-cy="searchField"]').type("python")
            cy.get('form > button').click()
            cy.get(':nth-child(4) > button').click()
            cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > a').click()
            cy.get(':nth-child(2) > a').should('contain', 'Python Crash Course')

        })
    })
})