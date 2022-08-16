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
        className='m-3 flex flex-col justify-center text-center items-center bg-orange-300 hover:bg-orange-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
        style={{ width: "18rem" }}>
        <button onClick={handleThuKinh} id={id} className={id}>
          <img className='object-cover' src={url} alt='glasses img'></img>
        </button>
        <div className=''>
          <h5 className=''>{name}</h5>
          <p className=''>{desc}</p>
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Price: {price}</button>
        </div>
      </div>
    );
  }
}

export default Item_Thukinh;
