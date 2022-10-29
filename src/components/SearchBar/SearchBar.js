import React, {useState} from 'react';
import './SearchBar.css';

function SearchBar(props) {

  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
  };

  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  function handleSortByChange(sortByOption) {
    setSortBy(sortByOption);
  }

  function handleTermChange(e) {
    const term = e.target.value;
    setTerm(term);
  }

  function handleLocationChange(e) {
    const location = e.target.value;
    setLocation(location);
  }

  function handleSearch(e) {
    props.searchYelp(term, location, sortBy);
    e.preventDefault(); //because 'let's go' is a link 
  }

  function getSortByClass(sortByOption) {
    if(sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  function renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li 
          key={sortByOptionValue}
          onClick={() => {handleSortByChange(sortByOptionValue)}}
          className={getSortByClass(sortByOptionValue)}>
            {sortByOption}
        </li>
      );
    });
  }

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {renderSortByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={handleTermChange} />
        <input placeholder="Where?" onChange={handleLocationChange} />
      </div>
      <div className="SearchBar-submit">
        <a onClick={handleSearch}>Let's Go</a>
      </div>
    </div>
  );
}

export default SearchBar;