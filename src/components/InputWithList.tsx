import React from "react";

import { isEmpty } from "lodash";

import { InputWithListProps } from "../types";

const InputWithList: React.FC<InputWithListProps> = ({
  wrapperId,
  searchValue,
  setSearchValue,
  id,
  label,
  placeholder,

  listProps,
}) => {
  return (
    <div id={wrapperId} className="search-wrapper">
      <label htmlFor={id} className="search-label">
        {label}
      </label>
      <input
        value={searchValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(event.target.value)
        }
        id={id}
        placeholder={placeholder}
        className="search-input"
      />
      {!isEmpty(listProps) &&
        (listProps.isLoading ||
          listProps.hasError ||
          !isEmpty(listProps.data)) && (
          <div style={{ position: "relative" }}>
            <ul id={listProps.id} className="search-results">
              {listProps.isLoading && <li>Loading...</li>}
              {listProps.hasError && <li>Error</li>}
              {!listProps.isLoading &&
                listProps.data?.map((item: React.ReactNode, index: number) => (
                  <listProps.EntryComponent
                    key={index}
                    item={item}
                    onClick={listProps.onClick}
                    showHighlighted
                  />
                ))}
            </ul>
          </div>
        )}
    </div>
  );
};

export default InputWithList;
