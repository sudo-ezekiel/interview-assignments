import { useMemo } from "react";
import { get } from "lodash";

const HackerNewsStoryEntry = ({
  item,
  showDelete = false,
  handleDelete,
  onClick,
  showHighlighted = false,
}: any) => {
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
          onClick={() => handleDelete(item.title)}
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
