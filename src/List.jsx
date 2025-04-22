import React, { Component } from 'react';

class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
      const icon = item.type === "Fruit" ? "🍎" : "🥦";
      return <li key={item.name}>{icon} {item.name}</li>;
    });

    return items;
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default List;
