import { useState } from 'react'
import Logo from '../logo/Logo'
import { MobileMenuWrapper } from './MobileHeaderStyled'
import MobaleBurger from './mobaleBurger/MobaleBurger'

const MobileHeader = ({ toggleModal, isOpen }) => {
  return (
    <MobileMenuWrapper className="mobile">
      <Logo />
      <MobaleBurger toggleModal={toggleModal} isOpen={isOpen} />
    </MobileMenuWrapper>
  )
}

export default MobileHeader
