describe('My First Test', () => {
  it('Visits My React App', () => {
    cy.visit(' http://localhost:3000')
  })
})

describe('Login', () => {
  it('should log in with correct credentials', () => {
    cy.visit('http://localhost:3000');
    cy.get('#exampleInputEmail1').should('be.visible').type('test@example.com');
    cy.get('#exampleInputPassword1').should('be.visible').type('password');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/profile');
  });
});
