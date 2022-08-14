import React, { Component } from "react";
class Item_Thukinh extends Component {
  render() {
    let { price, name, url, desc } = this.props.detail;
    return (
      <div
        className='flex  flex-col justify-center text-center items-center'
        style={{ width: "18rem" }}>
        <button className=""><img className='object-cover' src={url}></img></button>
        <div className=''>
          <h5 className=''>{name}</h5>
          <p className=''>{desc}</p>
          <button className=''>{price}</button>
        </div>
      </div>
    );
  }
}

export default Item_Thukinh;
