import React, { Component } from 'react';
import "./star.css"
// 需抽离出来state starSelected可通过回调函数输出 在跟组件中统一处理
class StarRating extends Component {
    constructor(props) {
        super(props);
    }
    // 若starSelected有初始值 可以通过属性传进来

    render() {
        const {totalStar,color,onrate,id,starSelected} = this.props;

        const Star = ({selected = false,onclick = f => f}) =>{
            const starBg = selected?`${color}`:'gray';
            return( <div className='star' style={{background:`${starBg}`}} onClick={
                onclick} > </div>);
        }
           
        let starList = [];
        for (let index = 1; index <= totalStar; index++) {
            starList.push(<Star key={index} selected={index <= starSelected}
                onclick={()=>{console.log(id,index,starSelected);onrate(id,index)}} > </Star>);
        }
        return (
            <div> 
                {starList} 
                <p> {starSelected} of {totalStar}stars </p>
            </div>
        )
        }
        }
    export default StarRating;