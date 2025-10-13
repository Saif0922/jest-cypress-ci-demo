describe('Login Form', () => {
  it('logs in with correct credentials', () => {
    cy.visit('http://127.0.0.1:5500/public/index.html') // URL depends on your local server
    cy.get('#username').type('admin')
    cy.get('#password').type('1234')
    cy.get('#loginButton').click()
    cy.contains('Welcome, admin!').should('exist')
  });
  it.only('logs in with correct credentials', () => {
    cy.visit('http://localhost:8080') // URL depends on your local server
    cy.get('#username').type('admin')
    cy.get('#password').type('1234')
    cy.get('#loginButton').click()
    cy.contains('Welcome, admin!').should('exist')
  });

  it('fails login with wrong credentials', () => {
    cy.visit('http://localhost:8080')
    cy.get('#username').type('user')
    cy.get('#password').type('wrong')
    cy.get('#loginButton').click()
    cy.contains('Invalid username or password').should('exist')
  });
});
