import React, { Component } from 'react';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories'
import ShowFullItem from './components/ShowFullItem';
// import jsonData from './data.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Smart Clock",
          img: "Smart-Clock.jpg",
          desc: "Elegant smart clock with multiple features.",
          category: "Gadgets",
          price: 299.99
        },
        {
          id: 2,
          title: "Wireless Headphones",
          img: "Wireless-Headphones.jpg",
          desc: "High-quality sound and unmatched comfort.",
          category: "Audio",
          price: 149.99
        },
        {
          id: 3,
          title: "Laptop Stand",
          img: "Laptop-Stand.jpg",
          desc: "Ergonomic aluminum laptop stand for work and study.",
          category: "Accessories",
          price: 49.99
        },
        {
          id: 4,
          title: "Gaming Mouse",
          img: "Gaming-Mouse.jpg",
          desc: "High-performance gaming mouse with customizable buttons.",
          category: "Gaming",
          price: 89.99
        },
        {
          id: 5,
          title: "4K Monitor",
          img: "4K-Monitor.jpg",
          desc: "Ultra HD monitor with vivid colors and sharp details.",
          category: "Gaming",
          price: 499.99
        },
        {
          id: 6,
          title: "Portable Speaker",
          img: "Portable-Speaker.jpg",
          desc: "Compact Bluetooth speaker with powerful sound.",
          category: "Audio",
          price: 79.99
        },
        {
          id: 7,
          title: "Smartphone Holder",
          img: "Smartphone-Holder.jpg",
          desc: "Flexible and sturdy holder for smartphones.",
          category: "Accessories",
          price: 19.99
        },
        {
          id: 8,
          title: "Mechanical Keyboard",
          img: "Mechanical-Keyboard.jpg",
          desc: "Durable mechanical keyboard with RGB backlight.",
          category: "Gaming",
          price: 129.99
        },
        {
          id: 9,
          title: "Smart Thermostat",
          img: "Smart-Thermostat.jpg",
          desc: "Control your home temperature from anywhere.",
          category: "Home",
          price: 199.99
        }
      ],
      currentItems: [],
      ShowFullItem: false,
      fullItem:{}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.ShowFullItem && <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItem} onAdd={this.addToOrder} />}
        <Footer />
      </div>
    );
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] }, () => {
        console.log(this.state.orders);
      });
  }
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }
  chooseCategory(category) {
    if (category !== 'all') {
      this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
      });
    } else {
      this.setState({
        currentItems: this.state.items
      })
    }

  }
  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({
      ShowFullItem: !this.state.ShowFullItem
    })
  }
}

export default App;