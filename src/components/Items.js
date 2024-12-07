
import React, { Component } from 'react'
import Item from './Item'
export class Items extends Component {
  render() {
    // console.log(this.props.items);
    return (
      <main>
        {this.props.items.map(e => {
          return <Item onShowItem={this.props.onShowItem} key={e.id} item={e} onAdd={this.props.onAdd}/>;
        })}

      </main>
    )
  }
}

export default Items

