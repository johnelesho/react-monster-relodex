import React from 'react'
import "./search-box.styles.css"

const SearchBox = ({ placeholder, onSearchChange}) => {
    return (
        <div>
             <input className="search" type="search" placeholder={placeholder} onChange={onSearchChange}/>
        </div>
    )
}

export default SearchBox
