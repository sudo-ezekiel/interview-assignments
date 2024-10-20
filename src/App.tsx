import { useMemo, useState } from "react";

// react query
import { useQuery } from "@tanstack/react-query";

// redux
import { useDispatch } from "react-redux";
import { addStory } from "./app/hackerNewsSlice";

// components
import InputWithList from "./components/InputWithList";
import SavedStories from "./components/SavedStories";
import HackerNewsStoryEntry from "./components/HackerNewsStoryEntry";

// types
import { HackerNewsStory } from "./types";

// fetch hacker news stories api with query grabbed from input
const fetchStories = async (query: string) => {
  const response = await fetch(
    `https://hn.algolia.com/api/v1/search?query=${query}`,
  );
  const data = await response.json();
  return data.hits as HackerNewsStory[];
};

function App() {
  // redux store dispatch
  const dispatch = useDispatch();

  // input value for searching
  const [searchValue, setSearchValue] = useState<string>("");

  // enable query conditionally by if search value has more than 3 characters
  const refetchEnable = useMemo(() => {
    return searchValue?.length >= 3;
  }, [searchValue]);

  // query function
  const { data, error, isLoading } = useQuery<HackerNewsStory[], Error>({
    queryKey: ["HackerNewsStory", searchValue],
    queryFn: () => fetchStories(searchValue),
    enabled: refetchEnable,
  });

  // on clicking a searched row
  const onClick = (data: any) => {
    dispatch(addStory(data));
    setSearchValue("");
  };

  return (
    <div className="App">
      <section className="input-container">
        <InputWithList
          wrapperId="input-wrapper"
          id="search-input"
          label="Search"
          placeholder="Search title"
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          listProps={{
            id: "search-results",
            data: searchValue?.length < 3 ? undefined : data,
            isLoading: isLoading,
            hasError: error,
            onClick: onClick,
            EntryComponent: HackerNewsStoryEntry,
          }}
        />
      </section>

      <section className="saved-stories-container">
        <SavedStories id="saved-stories-list" />
      </section>
    </div>
  );
}

export default App;
