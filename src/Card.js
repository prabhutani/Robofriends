import React from 'react';

const Card = ({ id, name, b, email, d }) => {
        return (
                <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s">
                        <img alt='Robots Family' src={`https://robohash.org/${id}?200x200`} />
                        <div>
                                <h2>
                                        {name}
                                </h2>
                                <p>
                                        {id}
                                </p>
                                <p>
                                        {email}
                                </p>
                        </div>
                </div>
        );
}
export default Card;