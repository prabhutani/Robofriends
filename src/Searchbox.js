import React from 'react';

const Searchbox = ({ searchchange }) => {
    return (
        <div className="pa2">
            <input type="search"
                placeholder="Search friends"
                onChange={searchchange}
                className="pa3 ba b--green bg-lightest-blue" />
        </div>
    );
}
export default Searchbox;