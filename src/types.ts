import React from "react";

export interface HackerNewsStory {
  story_id: number;
  title: string;
  author: string;
  num_comments: number;
  points: number;
}

export interface InputWithListProps {
  wrapperId: string;
  searchValue: string;
  setSearchValue: (str: string) => void;
  id: string;
  label: string;
  placeholder: string;

  listProps: {
    id: string;
    data: any[] | undefined;
    isLoading: boolean;
    hasError: Error | null;
    onClick: (item: any) => void;
    EntryComponent: React.FC<any>;
  };
}

export type HackerNewsStoryEntryProps = {
  item: HackerNewsStory;
  showDelete?: boolean;
  handleDelete?: (id: number) => void;
  onClick?: (item: HackerNewsStory) => void;
  showHighlighted?: boolean;
};

export type SavedStoriesProps = {
  id: string;
  stories: HackerNewsStory[];
  handleDeleteStory: (id: number) => void;
};
