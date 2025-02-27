import React from 'react'
import { useLocation } from 'react-router-dom'
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
  FooterInputWrapper,
  FooterInput,
  FooterSubmitButton,
  FooterContactWrapper,
  LogoWrapp,
} from './FooterDextopStyled'

import SVGTELEGRAM from '../../../assets/icons/svgTelegram.svg'
import SVGWhatsapp from '../../../assets/icons/svgWhatsapp.svg'
import useNavigateToContact from '../../../hooks/useNavigateToContact'

const FooterDextop = () => {
  const redirectToContact = useNavigateToContact()
  const location = useLocation()
  console.log('====================================')
  console.log(location.pathname)
  console.log('====================================')
  const isContactPage = location.pathname === '/contact'

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

        {!isContactPage && (
          <FooterInputWrapper>
            <FooterInput placeholder="Введите свой ник в Telegram" />
            <FooterSubmitButton onClick={redirectToContact}>
              Подать заявку сейчас
            </FooterSubmitButton>
          </FooterInputWrapper>
        )}

        {!isContactPage && (
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
        )}
      </FooterDextopBottom>
    </FooterDextopContainer>
  )
}

export default FooterDextop
