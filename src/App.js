import React, { Component } from 'react';
import './App.css';
import AddColorForm from './AddColorForm.js'
import ColorList from './ColorList.js' 
import { V4MAPPED } from 'dns';
import {v4} from 'uuid'

class App extends Component {
  // constructor??
  constructor(props){
    super(props);
    // 初始化state
    this.state={
      colorList:[],
      starSelected:0
    }
    this.addColor = this.addColor.bind(this);
    this.changeRate = this.changeRate.bind(this)
    this.onclose = this.onclose.bind(this)

  }

  addColor(title,color){
    const colorList=[
      ...this.state.colorList,
      {
        id:v4(),
        title,
        color,
        rating:0
      }
    ]
    this.setState({colorList});//state 改变后 render也不更新
}
  changeRate(id,rate){
    const colorList = this.state.colorList.map(item=>
      id === item.id ? {
        ...item,
        rating:rate
      }:item
    )
    this.setState({colorList});
  }

  onclose(id){
    const colorList = this.state.colorList.filter((item)=>
       item.id !== id 
    )
    this.setState({colorList});
    
  }

  render() {
    const {colorList} = this.state;
    return (
      <div className="App">
        <h1>动态添加颜色demo</h1>
        <AddColorForm onNewColor={this.addColor}></AddColorForm>
        {colorList.map((item,i)=>
         <ColorList {...item} key={i}  onrate={this.changeRate} onclose={this.onclose} >
        </ColorList>)}
      </div>
    );
  }
}

export default App;
