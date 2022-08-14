import React, { Component } from "react";
import Header_Thukinh from "./Header_Thukinh";
import Itemlist_ThuKinh from "./Itemlist_Thukinh";
import Preview_Thukinh from "./Preview_Thukinh";
import { glassesArr } from "./dataGlasses";
class Main_Thukinh extends Component {
  state = {
    glassesArr: glassesArr,
  };
  render() {
    return (
      <div>
        <Header_Thukinh />
        <Preview_Thukinh />
        <Itemlist_ThuKinh data={this.state.glassesArr} />
      </div>
    );
  }
}

export default Main_Thukinh;
