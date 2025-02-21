import DesktopHeader from './components/desktopHeader/DesktopHeader'
import MobileHeader from './components/mobileHeader/MobileHeader'
import { HeaderWrapper } from './HeaderStyled'

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="container">
        <h1>Logo</h1>
        <DesktopHeader />
        <MobileHeader />
      </div>
    </HeaderWrapper>
  )
}

export default Header
