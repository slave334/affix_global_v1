import React from 'react'
import SVGTELEGRAM from '../../../assets/icons/svgTelegram.svg'
import SVGWhatsapp from '../../../assets/icons/svgWhatsapp.svg'
import Logo from '../../header/components/logo/Logo'
import {
  FooterContainer,
  FooterLogo,
  FooterNav,
  FooterNavColumn,
  FooterNavButton,
  FooterContacts,
  FooterContactIcon,
  FooterLegalList,
  FooterLegalItem,
  FooterCopyright,
  FooterContactButtonTelegram,
  FooterContactButtonWhatsapp,
} from '../FooterStyled'
import { useLocation } from 'react-router-dom'

const FooterMobale = () => {
  const location = useLocation()
  console.log('====================================')
  console.log(location.pathname)
  console.log('====================================')
  const isContactPage = location.pathname === '/affix_global/contact'

  return (
    <FooterContainer>
      <FooterLogo>
        <Logo />
      </FooterLogo>
      <FooterNav>
        <FooterNavColumn>
          <FooterNavButton>Про нас</FooterNavButton>
          <FooterNavButton>Преимущества</FooterNavButton>
        </FooterNavColumn>
        <FooterNavColumn>
          <FooterNavButton>Блог</FooterNavButton>
          <FooterNavButton>Контакты</FooterNavButton>
          <FooterNavButton>FAQ</FooterNavButton>
        </FooterNavColumn>
      </FooterNav>

      {!isContactPage && (
        <FooterContacts>
          <FooterContactButtonTelegram>
            <span>Перейти в наш Telegram Bot</span>
            <FooterContactIcon src={SVGTELEGRAM} alt="Telegram" />
          </FooterContactButtonTelegram>
          <FooterContactButtonWhatsapp>
            <span>Написать нам в Whatsapp</span>
            <FooterContactIcon src={SVGWhatsapp} alt="Whatsapp" />
          </FooterContactButtonWhatsapp>
        </FooterContacts>
      )}

      <FooterLegalList>
        <FooterLegalItem>
          Legal information Legal information Legal
        </FooterLegalItem>
        <FooterLegalItem>information Legal information Legal</FooterLegalItem>
        <FooterLegalItem>information Legal information Legal</FooterLegalItem>
        <FooterLegalItem>information Legal information</FooterLegalItem>
      </FooterLegalList>
      <FooterCopyright>© 2025 Affix Global Все права защищены</FooterCopyright>
    </FooterContainer>
  )
}

export default FooterMobale
