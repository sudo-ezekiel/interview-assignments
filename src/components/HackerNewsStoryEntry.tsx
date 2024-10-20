import { useMemo } from "react";
import { get, isNil } from "lodash";

import { HackerNewsStoryEntryProps } from "../types";

const HackerNewsStoryEntry: React.FC<HackerNewsStoryEntryProps> = ({
  item,
  showDelete = false,
  handleDelete,
  onClick,
  showHighlighted = false,
}) => {
  // determine if title is highlighted or not by grabbing data from back
  const title = useMemo(() => {
    // _highlight results exists, therefore proccess it
    if (get(item, "_highlightResult", false) && showHighlighted) {
      return get(item, "_highlightResult.title.value", "");
    }
    return get(item, "title", "");
  }, [item, showHighlighted]);

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      id={`${showHighlighted ? "search-results-list-li" : "saved-stories-list-li"}-${item.story_id}`}
      onClick={() => onClick && onClick(item)}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "90%" }}>
        <span dangerouslySetInnerHTML={{ __html: title }} />
        <div className="hacker-news-story-info">
          <span>{item.points} points</span>
          <span>by {item.author}</span>
          <span>{item.num_comments} comments</span>
        </div>
      </div>

      {showDelete && (
        <div
          onClick={() =>
            !isNil(item.story_id) && handleDelete && handleDelete(item.story_id)
          }
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            cursor: "pointer",
          }}
        >
          Delete
        </div>
      )}
    </li>
  );
};

export default HackerNewsStoryEntry;
