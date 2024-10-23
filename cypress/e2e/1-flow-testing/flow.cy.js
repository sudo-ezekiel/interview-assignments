/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("Hacker News App", () => {
  let storyId = "";

  before(() => {
    cy.visit("http://localhost:3000");
  });

  // async cause I have to await so I can save storyId and not be undefined
  it("searches for stories, saves the first one, and retrieves its story_id", async () => {
    cy.intercept(
      "GET",
      "https://hn.algolia.com/api/v1/search?query=REACT%20CYPRESS",
    ).as("getStories");

    cy.get('[data-testid="search-input"]').type("REACT CYPRESS");

    cy.wait("@getStories");

    cy.get('[data-testid="search-results"]').should("exist");

    // Get the first story's element ID that contains the story_id
    storyId = await cy
      .get('[data-testid^="search-results-list-li-"]')
      .first()
      .then(($firstStory) => {
        const elementId = $firstStory[0].id;
        return elementId.split("-").pop();
      });

    cy.log(`Saved story ID: ${storyId}`);
  });
});
