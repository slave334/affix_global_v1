import React, { useState } from 'react'
import {
  BurgerButtonContainerStyled,
  BurgerButtonMenuStyled,
  BurgerStickElementStyled,
} from './MobaleBurgerStyled'

const MobaleBurger = ({ toggleModal, isOpen }) => {
  return (
    <BurgerButtonContainerStyled onClick={toggleModal}>
      <BurgerButtonMenuStyled className={isOpen ? 'active' : 'not-active'}>
        <BurgerStickElementStyled />
        <BurgerStickElementStyled />
        <BurgerStickElementStyled />
      </BurgerButtonMenuStyled>
    </BurgerButtonContainerStyled>
  )
}

export default MobaleBurger
