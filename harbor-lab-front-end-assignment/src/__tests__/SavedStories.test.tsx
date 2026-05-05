import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SavedStories from "../components/SavedStories";
import { HackerNewsStory } from "../types";

const mockStories: HackerNewsStory[] = [
  {
    story_id: 1,
    title: "Mock Story 1",
    author: "John Doe",
    num_comments: 5,
    points: 10,
  },
  {
    story_id: 2,
    title: "Mock Story 2",
    author: "Jane Smith",
    num_comments: 2,
    points: 20,
  },
];

const mockHandleDeleteStory = jest.fn();

describe("SavedStories Component", () => {
  test("renders Saved Stories title", () => {
    render(
      <SavedStories
        id="saved-stories"
        stories={mockStories}
        handleDeleteStory={mockHandleDeleteStory}
      />,
    );
    const title = screen.getByText("Saved Stories");
    expect(title).toBeInTheDocument();
  });

  test("renders the correct number of HackerNewsStoryEntry components", () => {
    render(
      <SavedStories
        id="saved-stories"
        stories={mockStories}
        handleDeleteStory={mockHandleDeleteStory}
      />,
    );
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(mockStories.length);
  });

  test("calls handleDeleteStory when delete button is clicked", () => {
    render(
      <SavedStories
        id="saved-stories"
        stories={mockStories}
        handleDeleteStory={mockHandleDeleteStory}
      />,
    );
    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });

    deleteButtons.forEach((button, index) => {
      fireEvent.click(button);
      expect(mockHandleDeleteStory).toHaveBeenCalledWith(
        mockStories[index].story_id,
      );
    });
  });

  test("renders correctly with no stories", () => {
    render(
      <SavedStories
        id="saved-stories"
        stories={[]}
        handleDeleteStory={mockHandleDeleteStory}
      />,
    );

    const list = screen.getByTestId("saved-stories");
    expect(list).toBeInTheDocument();
  });

  test("does not render any stories when stories prop is empty", () => {
    render(
      <SavedStories
        id="saved-stories"
        stories={[]}
        handleDeleteStory={mockHandleDeleteStory}
      />,
    );

    const list = screen.getByTestId("saved-stories");
    expect(list).toBeEmptyDOMElement();
  });
});
