import React from 'react';
import Card from './Card'

const Cardlist = ({ robotDetails }) => {

    return (
        robotDetails.map((bro, i) => {
            return <Card
                key={i}
                name={robotDetails[i].name}
                id={robotDetails[i].id}
                email={robotDetails[i].email}
            />;
        })
    );
};


export default Cardlist;