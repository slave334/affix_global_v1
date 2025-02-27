import { useMediaQuery } from 'react-responsive'
import {
  FooterContactButtonTelegram,
  FooterContactButtonWhatsapp,
  FooterContactIcon,
  FooterContacts,
} from '../../components/footer/FooterStyled'
import { ContainerPading } from '../../styles/GlobalStyles'
import ContactVideo from './components/contactVideo/ContactVideo'
import {
  ContactContant,
  ContactNavigate,
  ContactTitle,
  ContactTitleEmail,
  ContactWraper,
} from './ContactStyled'

import SVGTELEGRAM from '../../assets/icons/svgTelegram.svg'
import SVGWhatsapp from '../../assets/icons/svgWhatsapp.svg'
import {
  FooterInput,
  FooterInputWrapper,
  FooterSubmitButton,
} from '../../components/footer/footerDextop/FooterDextopStyled'

const Contact = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 })

  return (
    <ContactWraper>
      <ContactVideo />
      <ContainerPading>
        <ContactContant>
          <ContactTitle>
            Вы можете связаться с нами любым способом ниже
          </ContactTitle>
          <ContactNavigate>
            <ContactTitleEmail>GLOBALAFFIX@mail.com</ContactTitleEmail>
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

            {isDesktop && (
              <FooterInputWrapper>
                <FooterInput placeholder="Введите свой ник в Telegram" />
                <FooterSubmitButton>Подать заявку сейчас</FooterSubmitButton>
              </FooterInputWrapper>
            )}
          </ContactNavigate>
        </ContactContant>
      </ContainerPading>
    </ContactWraper>
  )
}

export default Contact
