import React from "react";
import { connect } from "react-redux";

import {
  addIceCream,
  saleIceCream,
} from "../../redux/icecream/icecream-action";

const IceCreamComponent = (props) => {
  return (
    <div>
      <div>Number Of Icecream: {props.noOfIceCream}</div>
      <button onClick={props.saleIceCream}>Sale IceCream</button>
      <button onClick={props.addIceCream}>Add IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    noOfIceCream: state.iceCream.noOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIceCream: () => dispatch(addIceCream()),
    saleIceCream: () => dispatch(saleIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamComponent);
