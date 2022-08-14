import React, { Component } from "react";
import Item_Thukinh from "./Item_Thukinh";

export default class Itemlist_ThuKinh extends Component {
  render() {
    return (
      <div className='flex justify-center items-center'>
        <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-3'>
          {this.props.data.map((item) => {
            return (
              <div key={item.id} className=''>
                <Item_Thukinh detail={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
