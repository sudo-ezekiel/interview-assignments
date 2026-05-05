import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputWithList from "../components/InputWithList";
import { InputWithListProps, HackerNewsStory } from "../types";

interface MockEntryComponentProps {
  item: HackerNewsStory;
  onClick: (item: HackerNewsStory) => void;
}

const mockItem = { story_id: 1, title: "Mock Story", author: "John Doe" };
const MockEntryComponent = ({ item, onClick }: MockEntryComponentProps) => (
  <li data-testid={`entry-${item.story_id}`} onClick={() => onClick(item)}>
    {item.title}
  </li>
);

const defaultProps: InputWithListProps = {
  wrapperId: "test-wrapper",
  searchValue: "",
  setSearchValue: jest.fn(),
  id: "test-input",
  label: "Search",
  placeholder: "Search for stories",
  listProps: {
    id: "test-list",
    data: [mockItem],
    isLoading: false,
    hasError: null,
    onClick: jest.fn(),
    EntryComponent: MockEntryComponent,
  },
};

describe("InputWithList Component", () => {
  test("renders input with correct label and placeholder", () => {
    render(<InputWithList {...defaultProps} />);
    const label = screen.getByLabelText("Search");
    expect(label).toBeInTheDocument();
    const input = screen.getByTestId("test-input");
    expect(input).toBeInTheDocument();
  });

  test("changes input value", () => {
    const setSearchValue = jest.fn();
    render(<InputWithList {...defaultProps} setSearchValue={setSearchValue} />);
    const input = screen.getByTestId("test-input");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(setSearchValue).toHaveBeenCalledWith("new value");
  });

  test("renders loading state when isLoading is true", () => {
    const listProps = {
      ...defaultProps.listProps,
      isLoading: true,
    };
    render(<InputWithList {...defaultProps} listProps={listProps} />);
    const loadingItem = screen.getByText("Loading...");
    expect(loadingItem).toBeInTheDocument();
  });

  test("renders error state when hasError is present", () => {
    const listProps = {
      ...defaultProps.listProps,
      hasError: new Error("Failed to load"),
    };
    render(<InputWithList {...defaultProps} listProps={listProps} />);
    const errorItem = screen.getByText("Error");
    expect(errorItem).toBeInTheDocument();
  });

  test("renders list items when data is provided", () => {
    render(<InputWithList {...defaultProps} />);
    const listItem = screen.getByTestId(`entry-${mockItem.story_id}`);
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveTextContent(mockItem.title);
  });

  test("calls onClick handler when list item is clicked", () => {
    const handleClick = jest.fn();
    const listProps = {
      ...defaultProps.listProps,
      onClick: handleClick,
    };
    render(<InputWithList {...defaultProps} listProps={listProps} />);
    const listItem = screen.getByTestId(`entry-${mockItem.story_id}`);
    fireEvent.click(listItem);
    expect(handleClick).toHaveBeenCalledWith(mockItem);
  });

  test("does not render list when listProps is empty", () => {
    const listProps = {
      ...defaultProps.listProps,
      data: [],
      isLoading: false,
      hasError: null,
    };
    render(<InputWithList {...defaultProps} listProps={listProps} />);
    const list = screen.queryByTestId("test-list");
    expect(list).not.toBeInTheDocument();
  });
});
