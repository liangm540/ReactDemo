import React, { Component } from 'react';
import StarRating from './StarRating'
import "./star.css"

class ColorList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {color,rating,onrate,id,onclose,title} = this.props;
        const titleText = title?title:color;
        return(
            <div className="colorList" >
                <h2>
                   {titleText} 
                </h2>
                <div className="colorBlock" style={{background:`${color}`}}></div>
                <StarRating totalStar={5} color={color} starSelected={rating} id={id} 
                onrate={onrate}></StarRating>
                <div className='close' onClick={()=>onclose(`${id}`)} >X</div>
            </div>
        )
    }
}
export default ColorList;
