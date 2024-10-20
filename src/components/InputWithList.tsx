import React from "react";

import { isEmpty } from "lodash";

import { InputWithListProps } from "../types";

const InputWithList: React.FC<InputWithListProps> = ({
  inputWrapperId,
  searchValue,
  setSearchValue,
  inputId,
  label,
  placeholder,

  listProps,
}) => {
  return (
    <div id={inputWrapperId} className="search-wrapper">
      <label htmlFor={inputId} className="search-label">
        {label}
      </label>
      <input
        value={searchValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(event.target.value)
        }
        id={inputId}
        placeholder={placeholder}
        className="search-input"
      />
      {!isEmpty(listProps) &&
        (listProps.listHasError ||
          listProps.listHasError ||
          listProps.listIsLoading ||
          !isEmpty(listProps.list)) && (
          <div style={{ position: "relative" }}>
            <ul id={listProps.listId} className="search-results">
              {listProps.listIsLoading && <li>Loading...</li>}
              {listProps.listHasError && <li>Error</li>}
              {!listProps.listIsLoading &&
                listProps.list?.map((item: React.ReactNode, index: number) => (
                  <listProps.ListEntryComponent
                    key={index}
                    item={item}
                    onClick={listProps.onListEntryClick}
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
