import { useMemo, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import InputWithList from "./components/InputWithList";
import ListEntryComponent from "./components/ListEntryComponent";

import { HackerNewsStory } from "./types";
import SavedStories from "./components/SavedStories";

const fetchStories = async () => {
  const response = await fetch(
    "https://hn.algolia.com/api/v1/search?query=javascript",
  );
  const data = await response.json();
  return data.hits as HackerNewsStory[];
};

function App() {
  const [searchValue, setSearchValue] = useState<string>("");

  // condition
  const refetchEnable = useMemo(() => {
    return searchValue?.length >= 3;
  }, [searchValue]);

  const { data, error, isLoading } = useQuery<HackerNewsStory[], Error>({
    queryKey: ["HackerNewsStory", searchValue],
    queryFn: fetchStories,
    enabled: refetchEnable,
  });

  const onListEntryClick = (data: any) => {
    console.log('reset');
    setSearchValue("");
  };

  return (
    <div className="App">
      <div
        className=""
        style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: 'center', height: '100vh', maxHeight: '100vh' }}
      >

        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40%', width: '50rem' }}>
          <InputWithList
            inputId=""
            inputWrapperId=""
            label="Search"
            placeholder="Search title"
            searchValue={searchValue}
            setSearchValue={setSearchValue}

            listProps={{
              listId: '',
              list: searchValue?.length < 3 ? undefined : data,
              listIsLoading: isLoading,
              listHasError: error,
              onListEntryClick: onListEntryClick,
              ListEntryComponent: ListEntryComponent
            }}
          />
        </section>

        <section className="" style={{ display: 'flex', justifyContent: 'center', overflowY: 'scroll', height: '100%', width: '50rem' }}>
          <h1 className="" style={{ width: '100%' }}>Saved Stories</h1>
          <SavedStories />
        </section>
      </div>
    </div>
  );
}

export default App;
