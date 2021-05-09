import React from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox.js';
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }
    render() {
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        }
        else {
            return (
                <div className="tc">
                    <h1 className='f2'>RoboFirends</h1>
                    <Searchbox searchchange={this.onSearchChange} />
                    <Cardlist robotDetails={filterRobots} />
                </div>
            );
        }
    }
}
export default App;