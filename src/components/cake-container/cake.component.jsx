import React from "react";
import { addCake, saleCake } from "../../redux/cake/cake-action";
import { connect } from "react-redux";

const CakeComponent = (props) => {
  return (
    <div>
      <div>Number Of Cake: {props.noOfCake}</div>
      <button onClick={props.saleCake}>Sale Cake</button>
      <button onClick={props.addCake}>Add Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    noOfCake: state.cake.noOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saleCake: () => dispatch(saleCake()),
    addCake: () => dispatch(addCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
