/// <reference types="cypress" />

describe("Hacker News App", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("Checking if user flow works", () => {
    let storyId = 25956076;

    cy.intercept(
      "GET",
      "https://hn.algolia.com/api/v1/search?query=Comprehensive%20Intro%20to%20Testing%20JavaScript%20and%20React%20(Jest,%20Cypress,%20RTL)",
    ).as("getStories");

    cy.get('[data-testid="search-input"]').type(
      "Comprehensive Intro to Testing JavaScript and React (Jest, Cypress, RTL)",
    );

    cy.wait("@getStories");

    cy.get('[data-testid="search-results"]').should("exist");

    cy.get(`[data-testid="search-results-list-li-${storyId}"]`).click();

    cy.log(`Saved story ID: ${storyId}`);

    cy.get('[data-testid="saved-stories-list"]').should("be.visible");

    cy.get(`[data-testid="saved-stories-list-li-${storyId}"]`).should("exist");

    cy.get(`[data-testid="saved-stories-list-li-${storyId}"]`)
      .find('[data-testid="delete-button"]')
      .click();

    cy.get(`[data-testid="saved-stories-list-li-${storyId}"]`).should(
      "not.exist",
    );

    cy.log(`Deleted story ID: ${storyId}`);
  });
});
