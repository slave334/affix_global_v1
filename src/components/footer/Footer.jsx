import React from 'react'
import Logo from '../header/components/logo/Logo'
import {
  FooterWrapper,
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
} from './FooterStyled'
import SVGTELEGRAM from '../../assets/icons/svgTelegram.svg'
import SVGWhatsapp from '../../assets/icons/svgWhatsapp.svg'

const Footer = () => {
  return (
    <FooterWrapper>
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

        <FooterLegalList>
          <FooterLegalItem>
            Legal information Legal information Legal
          </FooterLegalItem>
          <FooterLegalItem>information Legal information Legal</FooterLegalItem>
          <FooterLegalItem>information Legal information Legal</FooterLegalItem>
          <FooterLegalItem>information Legal information</FooterLegalItem>
        </FooterLegalList>
        <FooterCopyright>
          © 2025 Affix Global Все права защищены
        </FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
