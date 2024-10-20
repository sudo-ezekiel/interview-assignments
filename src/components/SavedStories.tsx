import { useDispatch, useSelector } from "react-redux";
import { deleteStory } from "../app/hackerNewsSlice";
import { RootState } from "../app/store";

import { HackerNewsStory } from "../types";

const SavedStories = () => {
  const dispatch = useDispatch();
  const stories = useSelector((state: RootState) => state.hackerNews);

  const handleDeleteStory = (title: string) => {
    dispatch(deleteStory(title));
  };

  return (
    <div
      className=""
      style={{ display: "flex", flexDirection: "column", width: "100%" }}
    >
      <h1 style={{ width: "100%" }}>Saved Stories</h1>
      <br />
      {stories?.map((item: HackerNewsStory, index: number) => (
        <div key={index} onClick={() => handleDeleteStory(item.title)}>
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default SavedStories;
