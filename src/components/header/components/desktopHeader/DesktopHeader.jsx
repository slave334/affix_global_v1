import { Link } from 'react-router-dom'
import {
  DesktopHeaderButton,
  DesktopHeaderLink,
  DesktopHeaderNaw,
  DesktopHeaderWrapp,
} from './DesktopHeaderStyled'
import Logo from '../logo/Logo'
import useNavigateToContact from '../../../../hooks/useNavigateToContact'

const DesktopHeader = () => {
  const redirectToContact = useNavigateToContact()
  return (
    <DesktopHeaderWrapp className="desktop">
      <Logo />
      <DesktopHeaderNaw>
        <DesktopHeaderLink to="/affix_global/">Про нас</DesktopHeaderLink>
        <DesktopHeaderLink to="/affix_global/advantages">
          Преимущества
        </DesktopHeaderLink>
        <DesktopHeaderLink to="/affix_global/blog">Блог</DesktopHeaderLink>
        <DesktopHeaderLink to="/affix_global/contact">
          Контакты
        </DesktopHeaderLink>
        <DesktopHeaderLink to="/affix_global/contact">FAQ</DesktopHeaderLink>
      </DesktopHeaderNaw>
      <DesktopHeaderButton onClick={redirectToContact}>
        Подать заявку сейчас
      </DesktopHeaderButton>
    </DesktopHeaderWrapp>
  )
}

export default DesktopHeader
