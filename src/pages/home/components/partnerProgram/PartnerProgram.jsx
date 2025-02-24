import PartnerProgramVodeo from './PartnerProgramVodeo'
import {
  PartnerProgramWrapper,
  PartnerProgramContent,
  PartnerProgramTitle,
  PartnerProgramText,
  PartnerProgramButton,
} from './PartnerProgramStyled'
import { ContainerPading } from '../../../../styles/GlobalStyles'

const PartnerProgram = () => {
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
          <PartnerProgramButton>Подать заявку сейчас</PartnerProgramButton>
        </PartnerProgramContent>
      </ContainerPading>
    </PartnerProgramWrapper>
  )
}

export default PartnerProgram
