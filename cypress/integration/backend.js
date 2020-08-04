describe("Sample Backend Test", () => {
  it("Get", () => {
    cy.request("GET", "http://localhost:8080/backend.php")
      .its("body")
      .should("include", "GET");
  });
  it("Post", () => {
    cy.request("POST", "http://localhost:8080/backend.php")
      .its("body")
      .should("include", "POST");
  });
  it("Put", () => {
    cy.request("PUT", "http://localhost:8080/backend.php")
      .its("body")
      .should("include", "PUT");
  });
  it("Delete", () => {
    cy.request("DELETE", "http://localhost:8080/backend.php")
      .its("body")
      .should("include", "DELETE");
  });
});
