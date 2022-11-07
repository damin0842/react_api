import React, { useRef } from "react";

export const MovieSearch = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const onClick = () => {
    handleSearch();
  };

  return (
    <div className="movie_search">
      <div className="container">
        <h3>검색하기</h3>
        <input
          ref={inputRef}
          type="search"
          placeholder="검색하세요!"
          onKeyPress={onKeyPress}
        />
        <button type="submit" onClick={onClick}>
          검색
        </button>
      </div>
    </div>
  );
};

export default MovieSearch;
