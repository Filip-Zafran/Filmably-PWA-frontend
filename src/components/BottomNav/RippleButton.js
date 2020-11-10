import React from "react";
import "./RippleButton.css";

/*const styleRipple = {
  position: "relative",
  //overflow: "hidden",
};
const styleRippleContainer = {
  position: "absolute",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
};
const styleSpan = {
  transform: "scale(0)",
  borderRadius: "100%",
  position: "absolute",
  opacity: "0.75",
  backgroundColor: "#ffffff",
  animation: "ripple 850ms",
};
*/

export class Ripple extends React.Component {
  initializeState = () => {
    return {
      spanStyles: {},
      count: 0,
    };
  };
  state = this.initializeState();

  /* Debounce Code to call the Ripple removing function */
  callCleanUp = (cleanup, delay) => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cleanup();
      }, delay);
    };
  };

  showRipple = (e) => {
    const rippleContainer = e.currentTarget;
    const size = rippleContainer.offsetWidth;
    const pos = rippleContainer.getBoundingClientRect();
    const x = e.pageX - pos.x - size / 2;
    const y = e.pageY - pos.y - size / 2;

    const spanStyles = {
      top: y + "px",
      left: x + "px",
      height: size + "px",
      width: size + "px",
    };
    const count = this.state.count + 1;
    this.setState({
      spanStyles: { ...this.state.spanStyles, [count]: spanStyles },
      count: count,
    });
  };

  cleanUp = () => {
    const initialState = this.initializeState();
    this.setState({ ...initialState });
  };

  renderRippleSpan = () => {
    const { /*showRipple = false,*/ spanStyles = {} } = this.state;
    const spanArray = Object.keys(spanStyles);
    if (spanArray && spanArray.length > 0) {
      return spanArray.map((key, index) => {
        return (
          <span
            key={"spanCount_" + index}
            className=""
            style={{ ...spanStyles[key] }}
          ></span>
        );
      });
    } else {
      return null;
    }
  };

  render() {
    const { children = null, classes = "", onClickHandler = null } = this.props;
    return (
      <div
        ref="targetElement"
        className={"ripple " + classes}
        onClick={onClickHandler}
      >
        {children}
        <div
          className="rippleContainer"
          onMouseDown={this.showRipple}
          onMouseUp={this.callCleanUp(this.cleanUp, 2000)}
        >
          {this.renderRippleSpan()}
        </div>
      </div>
    );
  }
}

export const RippleButton = () => {
  return (
    <div className="rippleButtonDemo">
      <Ripple classes="bottomNavButton">Click Me</Ripple>
    </div>
  );
};
