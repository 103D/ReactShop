/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export class Item extends Component {
  item = this.props.item
  render() {
    return (
      <div className='item'>
        <img src={"./images/" + this.item.img} onClick={() => this.props.onShowItem(this.props.item)} /> 
        <h2>{this.item.title}</h2>
        <p>{this.item.desc}</p>
        <b>{this.item.price}$</b>
        <div className="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}>
          +
        </div>


      </div>
    )
  }
}

export default Item