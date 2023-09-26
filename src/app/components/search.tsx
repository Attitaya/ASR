import React, { useState } from 'react';
import { CgSearch } from "react-icons/cg";

const SearchBar = ({onSearch}) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
        console.log('Search :')
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="flex items-center">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="border rounded pr-20 pl-2 py-2 "
                />
                <button
                        onClick={handleSearch}
                        className="absolute inset-y-0 right-0 px-3 flex items-center justify-center bg-gray-200 rounded-r"
                    >
                        <CgSearch />
                </button>
            </div>
        </div>
    );
}

export default SearchBar;