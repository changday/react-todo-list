import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["one", "two"]
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }
  render() {
    return (
      <div style={{margin: "10px 0 0 10px"}}>
        <div>
          <Input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            placeholder="请输入"
            style={{width: "250px", marginRight: "10px"}}
          />
          <Button type="primary" onClick={this.handleAddItem}>添加</Button>
        </div>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={() => this.handleDeleteItem(index)}>{item}</List.Item>)}
          style={{width: "250px", marginTop: "10px"}}
        />
      </div>
    );
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleAddItem() {
    this.setState((prevstate) => {
      if (!!prevstate.inputValue.trim()) {
        return {
          list: [...prevstate.list, prevstate.inputValue],
          inputValue: ""
        }
      }
    })
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ""
    // })
  }

  handleDeleteItem(index) {
    // const currentList = [...this.state.list];
    // currentList.splice(index, 1);
    // this.setState({
    //   list: currentList
    // })
    this.setState((prevstate) => {
      const currentList = [...prevstate.list];
      currentList.splice(index,1);
      return {
        list: currentList
      }
    })
  }
}

export default App;
