import React from 'react'
import { BiSearch } from "react-icons/bi";
const SearchBox = () => {
  return (
    <div className='container'>
            <div className='search-bar-size'>

      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn" type="submit"> <BiSearch/> </button>
      </form>
            </div>
    </div>
  )
}

export default SearchBox;
