import React, { Component } from 'react';

class AddColorForm extends Component{
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this);
    }

   submit(e){
       const {onNewColor}=this.props;
       let title = this.refs.title;
       let color = this.refs.color;
       e.preventDefault();
       onNewColor(title.value,color.value);
       title.value="";
       color.value="#000"
   }
    render(){
       
        return (
            <form onSubmit={this.submit}>
                <input type="text" placeholder="请输入颜色值" ref="title"></input>
                <input type="color" ref="color"></input>
                <button>Add</button>
            </form>
        )
    }
}
export default AddColorForm