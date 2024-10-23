import { useMemo, useState, useEffect } from "react";

// react query
import { useQuery } from "@tanstack/react-query";

// redux
import { useDispatch, useSelector } from "react-redux";
import { deleteStory, addStory } from "./app/hackerNewsSlice";
import { RootState } from "./app/store";

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
  const stories = useSelector((state: RootState) => state.hackerNews);

  const handleDeleteStory = (story_id: number) => {
    dispatch(deleteStory(story_id));
  };

  // input value for searching
  const [debouncedSearchValue, setDebouncedSearchValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

  // enable query conditionally by if search value has more than 3 characters
  const refetchEnable = useMemo(() => {
    return debouncedSearchValue?.length >= 3;
  }, [debouncedSearchValue]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 300); // Delay of 300ms

    return () => {
      clearTimeout(handler); // Cleanup timeout on unmount or when searchValue changes
    };
  }, [searchValue]);

  // query function
  const { data, error, isLoading } = useQuery<HackerNewsStory[], Error>({
    queryKey: ["HackerNewsStory", debouncedSearchValue],
    queryFn: () => fetchStories(debouncedSearchValue),
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
        <SavedStories
          id="saved-stories-list"
          stories={stories}
          handleDeleteStory={handleDeleteStory}
        />
      </section>
    </div>
  );
}

export default App;
