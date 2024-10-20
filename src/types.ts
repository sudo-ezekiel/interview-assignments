import React from "react";

export interface HackerNewsStory {
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
