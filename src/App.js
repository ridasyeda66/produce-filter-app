import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';

const produce = [
  { name: "Apple", type: "Fruit" },
  { name: "Pineapple", type: "Fruit" },
  { name: "Banana", type: "Fruit" },
  { name: "Pear", type: "Fruit" },
  { name: "Strawberry", type: "Fruit" },
  { name: "Orange", type: "Fruit" },
  { name: "Lettuce", type: "Vegetable" },
  { name: "Cucumber", type: "Vegetable" },
  { name: "Eggplant", type: "Vegetable" },
  { name: "Squash", type: "Vegetable" },
  { name: "Bell pepper", type: "Vegetable" },
  { name: "Onion", type: "Vegetable" }
];

class App extends Component {
  render() {
    return (
        <div className="App">
        <div className="section">
          <HelloWorld name="Rida Syeda" />
        </div>
      
        <div className="section counter">
          <Counter />
        </div>
      
        <div className="section filter-list">
          <FilteredList items={produce} />
        </div>
      </div>
      
    );
  }
}

export default App;
