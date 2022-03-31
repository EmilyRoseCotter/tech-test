import React from "react";
import "../styles/SearchResults.css";

const SearchResults = ({results}) => {
  if (!results.length) {
    return <p className="nr-title">No results</p>
  } else { 
      return(
        <>
         {results.map((image) => (
           <img className="card-image" src={image} alt="space-image" />
         ))}
       </>
     )
   }
};

export default SearchResults;