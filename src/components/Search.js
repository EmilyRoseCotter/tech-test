import React, { Fragment, useState } from "react";
import "../styles/Search.css";

function Search() {
  const [value, setValue] = useState();

  return(
      <>
      <form className="search-form"> 
      <input className="search_input" type="text" onChange={(e) => setValue(e.target.value)}/>
      <button type="submit" className="search-button" >Go!</button>
      </form>
      </>
  )
}

export default Search;