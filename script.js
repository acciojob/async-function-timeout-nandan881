describe('Async Function with Timeout Tests', () => {
  it('should display the message after delay - Test 1', () => {
    const delay = 1000;
    const text = "Test - 1";
    
    // Visit the page
    cy.visit(baseUrl + "/main.html");
    
    // Enter text and delay
    cy.get("input#text").type(text);
    cy.get("input#delay").type(delay);
    
    // Click the button
    cy.get("button#btn").click();
    
    // Assert that the output is initially empty
    cy.get("div#output").should("be.empty");
    
    // Wait for the delay and check the output
    cy.wait(delay);
    cy.get("div#output").should('have.text', text);  // Check the text after the delay
  });

  it('should display the message after delay - Test 2', () => {
    const delay = 2000;
    const text = "Test - 2";
    
    // Visit the page
    cy.visit(baseUrl + "/main.html");
    
    // Enter text and delay
    cy.get("input#text").type(text);
    cy.get("input#delay").type(delay);
    
    // Click the button
    cy.get("button#btn").click();
    
    // Assert that the output is initially empty
    cy.get("div#output").should("be.empty");
    
    // Wait for the delay and check the output
    cy.wait(delay);
    cy.get("div#output").should('have.text', text);  // Check the text after the delay
  });
});
