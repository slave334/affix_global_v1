import styled, { keyframes } from 'styled-components'

// Контейнер кнопки
export const BurgerButtonContainerStyled = styled.div`
  position: relative;
  width: 64px;
  height: 54px;
  background: transparent;
  border-radius: 15px;
`

const animateTopToActive = keyframes`
  0% { top: 0; transform: rotate(0); }
  50% { top: 12px; transform: rotate(0); }
  100% { top: 12px; transform: rotate(45deg); }
`

const animateTopToInactive = keyframes`
  0% { top: 12px; transform: rotate(45deg); }
  50% { top: 12px; transform: rotate(0deg); }
  100% { top: 0; transform: rotate(0deg); }
`

const animateBottomToActive = keyframes`
  0% { bottom: 0; transform: rotate(0); }
  50% { bottom: 12px; transform: rotate(0); }
  100% { bottom: 12px; transform: rotate(135deg); }
`

const animateBottomToInactive = keyframes`
  0% { bottom: 12px; transform: rotate(135deg); }
  50% { bottom: 12px; transform: rotate(0); }
  100% { bottom: 0; transform: rotate(0); }
`

const animateScaleIn = keyframes`
  50% { transform: scale(0); }
  100% { transform: scale(0); }
`

const animateScaleOut = keyframes`
  0% { transform: scale(0); }
  50% { transform: scale(0); }
  100% { transform: scale(1); }
`

export const BurgerButtonMenuStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  cursor: pointer;

  &.active span:nth-child(1) {
    animation: ${animateTopToActive} 0.7s forwards;
  }
  &.not-active span:nth-child(1) {
    animation: ${animateTopToInactive} 0.7s forwards;
  }
  &.active span:nth-child(2) {
    animation: ${animateScaleIn} 0.7s forwards;
  }
  &.not-active span:nth-child(2) {
    animation: ${animateScaleOut} 0.7s forwards;
  }
  &.active span:nth-child(3) {
    animation: ${animateBottomToActive} 0.7s forwards;
  }
  &.not-active span:nth-child(3) {
    animation: ${animateBottomToInactive} 0.7s forwards;
  }
`

export const BurgerStickElementStyled = styled.span`
  display: block;
  width: 100%;
  border-radius: 3px;
  height: 6px;
  background: #fff;
  transition: all 0.3s;
  position: relative;

  &:not(:first-child) {
    margin-top: 6px;
  }

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7);
    transform: translateY(-2px);
  }
`
