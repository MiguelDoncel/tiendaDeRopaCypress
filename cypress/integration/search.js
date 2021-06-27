describe('Search Elements',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Search for elements with multiple results',()=>{
        cy.search('dress');
        cy.tittle('dress');
    })
    it('Search for elements with no results',()=>{
        cy.search('qwerty');
        cy.alert('No results were found for your search')
    })
})