/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export class ShowFullItem extends Component {
    item = this.props.item
    render() {
        return (
            <div className='full-item'>
                <div>
                    <img src={"./images/" + this.item.img} onClick={() => this.props.onShowItem(this.item)} />
                    <h2>{this.item.title}</h2>
                    <p>{this.item.desc}</p>
                    <b>{this.item.price}$</b>
                    <div className="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}>
                        +
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowFullItem