import React, { Component } from "react";
import model from './asset/glassesImage/model.jpg'
class Preview_Thukinh extends Component {
  render() {
    return (
      <div className='flex justify-center items-center'>
        <img className='object-cover w-[400px]'src={model}></img>
      </div>
    );
  }
}

export default Preview_Thukinh;
