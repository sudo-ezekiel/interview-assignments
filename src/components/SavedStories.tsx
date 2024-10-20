import { HackerNewsStory } from "../types";
import HackerNewsStoryEntry from "./HackerNewsStoryEntry";

import { SavedStoriesProps } from "../types";

const SavedStories: React.FC<SavedStoriesProps> = ({
  id,
  stories,
  handleDeleteStory,
}) => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "relative",
        zIndex: 0,
      }}
    >
      <h1 style={{ width: "100%", marginBottom: "0.2rem" }}>Saved Stories</h1>
      <ul className="saved-stories-list" id={id}>
        {stories?.map((item: HackerNewsStory, index: number) => (
          <HackerNewsStoryEntry
            key={index}
            item={item}
            showDelete
            handleDelete={handleDeleteStory}
          />
        ))}
      </ul>
    </div>
  );
};

export default SavedStories;
