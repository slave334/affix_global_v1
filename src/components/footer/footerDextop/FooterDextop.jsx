import React from 'react'
import Logo from '../../header/components/logo/Logo'
import {
  FooterContactButtonTelegram,
  FooterContactButtonWhatsapp,
  FooterContactIcon,
  FooterCopyright,
  FooterLegalItem,
  FooterLegalList,
  FooterNavButton,
} from '../FooterStyled'

import {
  FooterDextopContainer,
  FooterDextopTop,
  FooterDextopBottom,
  FooterNavList,
  FooterNavItem,
  FooterInputWrapper,
  FooterInput,
  FooterSubmitButton,
  FooterContactWrapper,
  LogoWrapp,
} from './FooterDextopStyled'

import SVGTELEGRAM from '../../../assets/icons/svgTelegram.svg'
import SVGWhatsapp from '../../../assets/icons/svgWhatsapp.svg'

const FooterDextop = () => {
  return (
    <FooterDextopContainer>
      <FooterDextopTop>
        <LogoWrapp>
          <Logo />
        </LogoWrapp>

        <FooterLegalList>
          <FooterLegalItem>Legal information Legal</FooterLegalItem>
          <FooterLegalItem>information Legal information Legal</FooterLegalItem>
          <FooterLegalItem>information Legal information Legal</FooterLegalItem>
          <FooterLegalItem>information Legal information</FooterLegalItem>
        </FooterLegalList>
        <FooterCopyright>
          © 2025 Affix Global Все права защищены
        </FooterCopyright>
      </FooterDextopTop>

      <FooterDextopBottom>
        <FooterNavList>
          <FooterNavButton>Про нас</FooterNavButton>
          <FooterNavButton>Преимущества</FooterNavButton>
          <FooterNavButton>Блог</FooterNavButton>
          <FooterNavButton>Контакты</FooterNavButton>
          <FooterNavButton>FAQ</FooterNavButton>
        </FooterNavList>

        <FooterInputWrapper>
          <FooterInput placeholder="Введите свой ник в Telegram" />
          <FooterSubmitButton>Подать заявку сейчас</FooterSubmitButton>
        </FooterInputWrapper>

        <FooterContactWrapper>
          <FooterContactButtonTelegram>
            <span>Перейти в наш Telegram Bot</span>
            <FooterContactIcon src={SVGTELEGRAM} alt="Telegram" />
          </FooterContactButtonTelegram>
          <FooterContactButtonWhatsapp>
            <span>Написать нам в Whatsapp</span>
            <FooterContactIcon src={SVGWhatsapp} alt="Whatsapp" />
          </FooterContactButtonWhatsapp>
        </FooterContactWrapper>
      </FooterDextopBottom>
    </FooterDextopContainer>
  )
}

export default FooterDextop
