describe("File upload and download", () => {
  it("Upload file", () => {
    cy.visit("https://imgur.com");
    cy.get('[href="/upload"]').click();
    cy.wait(3000);
    cy.get("#file-input").attachFile("../fixtures/cat.jpg");
    cy.wait(2000);
    cy.get(".ToastContainer").contains("Upload Complete!");
  });
});
