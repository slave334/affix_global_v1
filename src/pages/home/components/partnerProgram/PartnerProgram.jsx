import PartnerProgramVodeo from './PartnerProgramVodeo'
import {
  PartnerProgramWrapper,
  PartnerProgramContent,
  PartnerProgramTitle,
  PartnerProgramText,
  PartnerProgramButton,
} from './PartnerProgramStyled'
import { ContainerPading } from '../../../../styles/GlobalStyles'
import useNavigateToContact from '../../../../hooks/useNavigateToContact'

const PartnerProgram = () => {
  const redirectToContact = useNavigateToContact()
  return (
    <PartnerProgramWrapper>
      <PartnerProgramVodeo />
      <ContainerPading>
        <PartnerProgramContent>
          <PartnerProgramTitle>
            Партнерская программа Affix Global
          </PartnerProgramTitle>
          <PartnerProgramText>
            Другим маркетологам и получайте пожизненную прибыль в размере 10% от
            количества привлеченных вами клиентов
          </PartnerProgramText>
          <PartnerProgramButton onClick={redirectToContact}>
            Подать заявку сейчас
          </PartnerProgramButton>
        </PartnerProgramContent>
      </ContainerPading>
    </PartnerProgramWrapper>
  )
}

export default PartnerProgram
