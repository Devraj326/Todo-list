import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      item: '',
    };
  }

  addItem = () => {
    this.setState({
      list: [...this.state.list, this.state.item],
      item: '',
    });
  };
  

  changeItem = (e) => {
    this.setState({ item: e.target.value });
  };

  deleteItem = (index) => {
    const { list } = this.state;
    const updatedList = list.filter((_, i) => i !== index);
    this.setState({ list: updatedList });
  };
  

  editItem = (index, e) => {
    const { value } = e.target;
    const newList = [...this.state.list];
    newList[index] = value;
    this.setState({ list: newList });
  };
  

  render() {
    const { list, item } = this.state;

    return (
      <div className='conta'>
        <h1>TO-DO List</h1>
        <div className='main'>
          <div>
            <input
              type="text"
              value={item}
              placeholder='Enter the task'
              onChange={this.changeItem}
            />
          </div>
          <div>
            <button type='submit' onClick={this.addItem}>
              Add
            </button>
          </div>
        </div>
        <div>
          {list.map((item, index) => (
            <div key={index} className='items'>
              <input
                type="text"
                value={item}
                onChange={(e) => this.editItem(index, e)}
              />
              <button type='submit' onClick={() => this.deleteItem(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
