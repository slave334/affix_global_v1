import { ContainerPading } from '../../../../styles/GlobalStyles'
import {
  AboutUniqueWrapper,
  AboutUniqueTitle,
  AboutUniqueList,
  AboutUniqueItem,
  AboutUniqueIcon,
  AboutUniqueItemTitle,
  AboutUniqueText,
  AboutUniqueContainer,
} from './AboutUniqueStyled'
import aboutUniqueIMG from '../../../../assets/icons/aboutUnique.svg'
const AboutUnique = () => {
  return (
    <AboutUniqueContainer>
      <ContainerPading>
        <AboutUniqueWrapper>
          <AboutUniqueTitle>Что делает нас уникальными?</AboutUniqueTitle>
          <AboutUniqueList>
            <AboutUniqueItem>
              <AboutUniqueIcon src={aboutUniqueIMG} alt="Лучшие предложения" />
              <AboutUniqueItemTitle>
                Лучшие предложения от надёжных партнёров
              </AboutUniqueItemTitle>
              <AboutUniqueText>
                Мы сотрудничаем с крупнейшими рекламодателями, предлагая
                проверенные и актуальные решения для монетизации трафика
              </AboutUniqueText>
            </AboutUniqueItem>

            <AboutUniqueItem>
              <AboutUniqueIcon
                src={aboutUniqueIMG}
                alt="Поддержка и аналитика"
              />
              <AboutUniqueItemTitle>Поддержка и аналитика</AboutUniqueItemTitle>
              <AboutUniqueText>
                Каждому партнёру мы предоставляем доступ к актуальной аналитике,
                прогнозам и рекомендациям, которые помогают повышать
                эффективность и доход
              </AboutUniqueText>
            </AboutUniqueItem>

            <AboutUniqueItem>
              <AboutUniqueIcon src={aboutUniqueIMG} alt="Персональный подход" />
              <AboutUniqueItemTitle>
                Персональный подход и доверие
              </AboutUniqueItemTitle>
              <AboutUniqueText>
                Мы строим партнёрские отношения на долгий срок, помогая каждому
                участнику развивать и масштабировать свои проекты
              </AboutUniqueText>
            </AboutUniqueItem>

            <AboutUniqueItem>
              <AboutUniqueIcon src={aboutUniqueIMG} alt="Гибкие выплаты" />
              <AboutUniqueItemTitle>
                Гибкие и стабильные выплаты
              </AboutUniqueItemTitle>
              <AboutUniqueText>
                Мы понимаем, что финансовая стабильность важна для развития,
                поэтому обеспечиваем удобные, своевременные выплаты без задержек
              </AboutUniqueText>
            </AboutUniqueItem>
          </AboutUniqueList>
        </AboutUniqueWrapper>
      </ContainerPading>
    </AboutUniqueContainer>
  )
}

export default AboutUnique
