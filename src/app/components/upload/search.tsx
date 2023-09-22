import React, { useState } from "react";
import { CgSearch } from "react-icons/cg";

function SearchBar() {

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query: any) => {
        // Implement your search logic here using the 'query' parameter.
        console.log("Search query:", query);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="flex items-center">
            <div className="relative">
                <input
                    type="text"
                    placeholder="search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress} // Handle Enter key press
                    className="border rounded pr-20 pl-2 py-2 font-bold"
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