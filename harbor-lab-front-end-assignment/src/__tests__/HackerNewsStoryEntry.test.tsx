import "@testing-library/jest-dom";

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HackerNewsStoryEntry from "../components/HackerNewsStoryEntry";
import { HackerNewsStory } from "../types";

const mockStory: HackerNewsStory = {
  story_id: 1,
  title: "Sample Story",
  author: "John Doe",
  num_comments: 10,
  points: 100,
};

describe("HackerNewsStoryEntry Component", () => {
  test("renders without crashing", () => {
    render(<HackerNewsStoryEntry item={mockStory} />);
    const listItem = screen.getByRole("listitem");
    expect(listItem).toBeInTheDocument();
  });

  test("delete button is not in DOM when showDelete is false", () => {
    render(<HackerNewsStoryEntry item={mockStory} showDelete={false} />);

    const deleteButton = screen.queryByTestId("delete-button");
    expect(deleteButton).not.toBeInTheDocument();
  });

  test("delete button is present and clickable when showDelete is true", () => {
    const handleDelete = jest.fn();
    render(
      <HackerNewsStoryEntry
        item={mockStory}
        showDelete={true}
        handleDelete={handleDelete}
      />,
    );

    const deleteButton = screen.getByTestId("delete-button");
    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalledWith(mockStory.story_id);
  });

  test("title is rendered without highlighting by default", () => {
    render(<HackerNewsStoryEntry item={mockStory} showHighlighted={false} />);

    const titleElement = screen.getByText(mockStory.title);
    expect(titleElement).toBeInTheDocument();

    // Check that no <em> tags are present (i.e., no highlighting)
    expect(titleElement.querySelector("em")).not.toBeInTheDocument();
  });

  test("title is highlighted when showHighlighted is true", () => {
    const highlightedStory = {
      ...mockStory,
      _highlightResult: {
        title: {
          value: "Mock <em>Story</em>",
        },
      },
    };

    render(
      <HackerNewsStoryEntry item={highlightedStory} showHighlighted={true} />,
    );

    const highlightedTitle = screen.getByTestId("hacker-news-story-title");

    expect(highlightedTitle).toBeInTheDocument();

    expect(highlightedTitle.querySelector("em")).toBeInTheDocument();
    expect(highlightedTitle.innerHTML).toContain("<em>Story</em>");
  });

  test("clicking on story calls onClick handler", () => {
    const handleClick = jest.fn();

    render(
      <HackerNewsStoryEntry
        item={mockStory}
        onClick={handleClick}
        showHighlighted={false}
      />,
    );

    const listItem = screen.getByTestId(
      `saved-stories-list-li-${mockStory.story_id}`,
    );

    fireEvent.click(listItem);
    expect(handleClick).toHaveBeenCalledWith(mockStory);
  });
});
