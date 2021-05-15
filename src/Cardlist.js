import React from 'react';
import Card from './Card'

const Cardlist = ({ robotDetails }) => {

    return (
        <div>
            {
        robotDetails.map((users, i) => {
            return <Card
                key={i}
                name={robotDetails[i].name}
                id={robotDetails[i].id}
                email={robotDetails[i].email}
            />;
        })
}</div>
);
}


export default Cardlist;