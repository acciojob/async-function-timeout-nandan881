describe('Form Inputs Test', () => {
  it('should load the form and check inputs', () => {
    const baseUrl = "your-base-url"; // make sure this is set to the correct base URL for the test
    cy.visit(baseUrl + "/main.html");  // Ensure this is pointing to the correct page

    // Wait for the form to be fully loaded
    cy.get("form").should("be.visible");

    // Check if the input fields and button are empty
    cy.get("input#text").should("be.empty");
    cy.get("input#delay").should("be.empty");
    cy.get("button#btn").should("be.visible");

    // Check if the output div is initially empty
    cy.get("div#output").should("be.empty");
  });
});
