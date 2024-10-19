import React from "react";

export interface HackerNewsStory {
  title: string;
  author: string;
  num_comments: number;
  points: number;
}

export interface InputWithListProps {
  inputWrapperId: string;
  searchValue: string;
  setSearchValue: (str: string) => void;
  inputId: string;
  label: string;
  placeholder: string;

  listProps: {
    listId: string;
    list: any[] | undefined;
    listIsLoading: boolean;
    listHasError: Error | null;
    onListEntryClick: (item: any) => void;
    ListEntryComponent: React.FC<any>;
  };
}
