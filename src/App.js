
import './App.css';

import { Component } from 'react'
import { CardList } from './components/card-list/card-list.component.jsx'

import SearchBox from './components/search/search-box.component'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1> Monster Rolodex</h1>
        <SearchBox placeholder='Search Monster' onSearchChange={this.onSearchChange}/>
        <CardList monsters={filteredMonsters}/>
           
    </div>
    )
  }
}
