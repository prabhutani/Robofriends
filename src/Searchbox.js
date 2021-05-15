import React from 'react';

const Searchbox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input type="search"
                placeholder="Search friends"
                onChange={searchChange}
                className="pa3 ba b--green bg-lightest-blue" />
        </div>
    );
}
export default Searchbox;