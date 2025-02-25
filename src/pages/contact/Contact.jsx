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

const Contact = () => {
  return (
    <ContactWraper>
      <ContactVideo />
      <ContainerPading>
        <ContactContant>
          <ContactTitle>
            Вы можете связатся с нами любым способом ниже
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
          </ContactNavigate>
        </ContactContant>
      </ContainerPading>
    </ContactWraper>
  )
}

export default Contact
