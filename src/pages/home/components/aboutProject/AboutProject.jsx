import useNavigateToContact from '../../../../hooks/useNavigateToContact'
import { ContainerPading } from '../../../../styles/GlobalStyles'
import {
  AboutProjectWrapper,
  AboutProjectImageWrapper,
  AboutProjectContent,
  AboutProjectTitle,
  AboutProjectText,
  AboutProjectButton,
} from './AboutProjectStyles'
import AboutProjectVideo from './AboutProjectVideo'

const AboutProject = () => {
  const redirectToContact = useNavigateToContact()
  return (
    <AboutProjectWrapper>
      <AboutProjectImageWrapper>
        <AboutProjectVideo />
      </AboutProjectImageWrapper>
      <ContainerPading>
        <AboutProjectContent>
          <AboutProjectTitle>
            Проект родился благодаря команде экспертов, которые глубоко знают
            рынок digital-рекламы и онлайн-продвижения
          </AboutProjectTitle>
          <AboutProjectText>
            Мы прошли путь от первых тестов рекламных кампаний до масштабных
            международных проектов и знаем, что действительно важно:
          </AboutProjectText>
          <AboutProjectButton onClick={redirectToContact}>
            Подать заявку сейчас
          </AboutProjectButton>
        </AboutProjectContent>
      </ContainerPading>
    </AboutProjectWrapper>
  )
}

export default AboutProject
