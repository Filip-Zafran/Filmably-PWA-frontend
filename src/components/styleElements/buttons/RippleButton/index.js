import React, { useState, useEffect } from 'react';
import { RippleStyled } from './rippleButton.styled';

export default function RippleButton({
  children = null,
  classes = '',
  onClickHandler = null,
}) {
  const [count, setCount] = useState(0);
  const [spanStyles, setSpanStyles] = useState({});

  const callCleanUp = (cleanup, delay) => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cleanup();
      }, delay);
    };
  };

  const showRipple = (e) => {
    const rippleContainer = e.currentTarget;
    const size = rippleContainer.offsetWidth;

    const newSpanStyles = {
      position: 'fixed',
      height: size + 'px',
      width: size + 'px',
    };

    setSpanStyles({ ...spanStyles, [count + 1]: newSpanStyles });
    setCount(count + 1);
  };

  const cleanUp = () => {
    setCount(0);
    setSpanStyles({});
  };

  const renderRippleSpan = () => {
    const spanArray = Object.keys(spanStyles);
    if (spanArray && spanArray.length > 0) {
      return spanArray.map((key, index) => {
        return (
          <span
            data-testid="rippleSpan"
            key={'spanCount_' + index}
            className=""
            style={{ ...spanStyles[key] }}
          ></span>
        );
      });
    } else {
      return null;
    }
  };

  return (
    <RippleStyled className={classes} onClick={onClickHandler}>
      {children}
      <div
        data-testid="rippleContainer"
        className="rippleContainer"
        onMouseDown={showRipple}
        onMouseUp={callCleanUp(cleanUp, 2000)}
      >
        {renderRippleSpan()}
      </div>
    </RippleStyled>
  );
}
