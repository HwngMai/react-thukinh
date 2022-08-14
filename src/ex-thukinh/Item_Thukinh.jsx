import React, { Component } from "react";
// import { handleThuKinh } from "./controllers/controller";
class Item_Thukinh extends Component {
  render() {
    let { id, price, name, url, desc } = this.props.detail;
    let handleThuKinh = () => {
      let contentHTML = `<img src=${url}>`;
      document.getElementById("preview_item").innerHTML = contentHTML;
    };
    return (
      <div
        className='flex flex-col justify-center text-center items-center'
        style={{ width: "18rem" }}>
        <button onClick={handleThuKinh} id={id} className={id}>
          <img className='object-cover' src={url} alt='glasses img'></img>
        </button>
        <div className=''>
          <h5 className=''>{name}</h5>
          <p className=''>{desc}</p>
          <button className=''>{price}</button>
        </div>
      </div>
    );
  }
}
// import { glassesArr } from "../dataGlasses.js";
//FUNCTION thử kính
// export function handleThuKinh() {
//   let contentHTML = `VL`;
//   //   //lấy src url đưa vào contentHTML
//   //   //show contentHTML
//   document.getElementById("preview_item").innerHTML = contentHTML;
// }

export default Item_Thukinh;
