/* eslint-disable array-callback-return */
import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: "Всё"
                },
                {
                    key: 'Gadgets',
                    name: "Гаджеты"
                },
                {
                    key: 'Audio',
                    name: "Аудио"
                },
                {
                    key: 'Gaming',
                    name: "Для игр"
                },
                {
                    key: 'Home',
                    name: "Для дома"
                },
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map((el => (
                    <div key={el.key} onClick={()=>this.props.chooseCategory(el.key)}>{el.name}</div>
                )))}
            </div>
        )
    }
    
}

export default Categories