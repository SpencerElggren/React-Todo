import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            itemList: []
        };
    }

    toggleItem = id => {
        const newItemList = this.state.itemList.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    finished: !item.finished
                }
            } else {
                return item;
            }
        });
        this.setState({itemList: newItemList});
    };

    clearItems = () => {
        const newItemList = this.state.itemList.filter(item => {
            return item.finished === false;
        });
        this.setState({itemList: newItemList})
    };

    addItem = itemName => {
        const newItem = {
            name: itemName,
            id: Date.now(),
            finished: false
        };
        this.setState({
            itemList: [...this.state.itemList, newItem]
        });
    };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList items={this.state.itemList} toggleItem={this.toggleItem} clearItems={this.clearItems}/>
        <TodoForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
