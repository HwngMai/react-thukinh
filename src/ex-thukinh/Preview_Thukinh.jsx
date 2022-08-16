import React, { Component } from "react";
import model from "./asset/glassesImage/model.jpg";
class Preview_Thukinh extends Component {
  render() {
    return (
      <div
        id='preview__bg'
        className='max-w-sm w-full lg:max-w-full lg:flex static flex justify-center items-center'>
        <img className='object-cover w-[400px] shadow-lg' src={model}></img>
        <div
          id='preview_item'
          className='absolute w-[200px] h-[40px] top-[205px]'></div>
      </div>
    );
  }
}

export default Preview_Thukinh;
