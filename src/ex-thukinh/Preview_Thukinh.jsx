import React, { Component } from "react";
import model from "./asset/glassesImage/model.jpg";
class Preview_Thukinh extends Component {
  render() {
    return (
      <div id='preview__bg' className='static flex justify-center items-center'>
        <img className='object-cover w-[400px]' src={model}></img>
        <div
          id='preview_item'
          className='absolute bg-slate-100 w-[200px] h-[40px] top-[200px]'>
        </div>
      </div>
    );
  }
}

export default Preview_Thukinh;
