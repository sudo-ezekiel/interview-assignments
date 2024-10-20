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
  test("renders story title and author", () => {
    render(<HackerNewsStoryEntry item={mockStory} />);

    expect(screen.getByText("Sample Story")).toBeInTheDocument();
    expect(screen.getByText(/by John Doe/i)).toBeInTheDocument(); // regex
  });

  test("calls onClick when story is clicked", () => {
    const handleClick = jest.fn();
    render(<HackerNewsStoryEntry item={mockStory} onClick={handleClick} />);

    fireEvent.click(screen.getByText("Sample Story"));
    expect(handleClick).toHaveBeenCalledWith(mockStory);
  });

  test("shows delete button when showDelete is true", () => {
    const handleDelete = jest.fn();
    render(
      <HackerNewsStoryEntry
        item={mockStory}
        showDelete={true}
        handleDelete={handleDelete}
      />,
    );

    const deleteButton = screen.getByText("Delete");
    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalledWith(mockStory.story_id);
  });
});
