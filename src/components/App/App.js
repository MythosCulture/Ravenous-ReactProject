import { useState } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar'
import Yelp from '../../util/Yelp';

function App() {
  const [businesses, setBusinesses] = useState([]);

  function searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);

    return Yelp.search(term,location,sortBy).then(response => {
      setBusinesses(response);
    });
  }

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
