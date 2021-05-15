import React, { useState, useEffect } from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox.js';
import './App.css';

function App() {

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchField: ''
    //     }
    // }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)});
    }, []);
    // componentDidMount()  {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => setRobots(users));
    // }
    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filterRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                {/* <button onClick={()=>setCount(count+1)}>Click Me!</button> */}
                <Searchbox searchChange={onSearchChange} />
                <Cardlist robotDetails={filterRobots} />

            </div>
        );
}
export default App;