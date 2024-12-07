/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
    item = this.props.item
    render() {
        return (
            <div className='item'>
                <img src={"./images/" + this.item.img} />
                <h2>{this.item.title}</h2>
                <p>{this.item.price}$</p>
                <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.item.id)} />
            </div>
        )
    }
}

export default Order