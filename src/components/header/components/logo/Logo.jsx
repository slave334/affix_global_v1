import LogoTop from '../../../../assets/icons/logoTop.svg'
import LogoBottom from '../../../../assets/icons/logoBottom.svg'
import { LogoWrapp } from './LogoStyled'

const Logo = () => {
  return (
    <LogoWrapp>
      <img src={LogoTop} />
      <img src={LogoBottom} />
    </LogoWrapp>
  )
}

export default Logo
