import { useState } from 'react'
import DesktopHeader from './components/desktopHeader/DesktopHeader'
import MobileHeader from './components/mobileHeader/MobileHeader'

import { HeaderWrapper } from './HeaderStyled'
import NavigationModal from './components/navigationModal/NavigationModal'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <HeaderWrapper>
      <div className="container">
        <DesktopHeader />
        <MobileHeader toggleModal={toggleModal} isOpen={isModalOpen} />
      </div>

      <NavigationModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </HeaderWrapper>
  )
}

export default Header
