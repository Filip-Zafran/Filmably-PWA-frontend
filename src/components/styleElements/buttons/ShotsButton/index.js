import React from 'react';
import { Check, X } from '../../icons';
import styled from "styled-components";

const ShotButton = styled.div`
  width: 92px;
  height: 92px;
  cursor: pointer;
`;

const ShotButtonBorder = styled.div`
  border-radius: 50%;
  width: 92px;
  height: 92px;

  transform: ${props => props.active && 'scale(1.33)'};
  transition: ${props => props.active && 'transform 0.3s linear'};
  background: ${props => props.like ? 'var(--success-500-25)' : 'var(--error-500-25)'} ;
`;

const ShotButtonCenter = styled.div`
  top: -81px;
  left: 11px;
  pointer-events: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;

  background: ${props => (props.like && props.inactive) ? 'var(--success-500-25)' : props.like ? 'var(--success-500)' : props.inactive ? "var(--error-500-25)" : 'var(--error-500)'} ;
`;

export const ShotsButton = ({
  like,
  active,
  inactive,
  clickHandler,
  otherClickHandler,
}) => {
  return (
    <ShotButton >
      <ShotButtonBorder like={like} active={active}
        onTouchStart={like ? clickHandler('like') : clickHandler('dislike')}
        onMouseDown={like ? clickHandler('like') : clickHandler('dislike')}
        onTouchEnd={clickHandler('neutral')}
        onMouseUp={
          like ? otherClickHandler('like') : otherClickHandler('dislike')
        }
      />
      <ShotButtonCenter like={like} inactive={inactive}>
        {like ? <Check /> : <X />}
      </ShotButtonCenter>
    </ShotButton>
  );
};
