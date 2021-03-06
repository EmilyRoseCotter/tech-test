import React from "react";
import "../styles/SearchResults.css";
import PropTypes from "prop-types";

const SearchResults = ({results}) => {
  if (!results.length) {
    return <p className="nr-title">Please enter a valid search term</p>
  } else { 
      return(
        <div className="searchResultList">
         {results.map((image) => (
           <img className="card-image" src={image} alt="space-image" />
         ))}
       </div>
     )
   }
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.string
  ),
};

export default SearchResults;