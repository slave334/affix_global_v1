import SVG1 from '../../../../assets/icons/CoreValuesIcon1.svg'
import SVG2 from '../../../../assets/icons/CoreValuesIcon2.svg'
import SVG3 from '../../../../assets/icons/CoreValuesIcon3.svg'
import { ContainerPading } from '../../../../styles/GlobalStyles'

import {
  CoreValuesWrapper,
  CoreValuesItem,
  CoreValuesIcon,
  CoreValuesTitle,
  CoreValuesText,
  CoreValuesContainer,
} from './CoreValuesStyled'

const CoreValues = () => {
  return (
    <CoreValuesContainer>
      {' '}
      <ContainerPading>
        <CoreValuesWrapper>
          <CoreValuesItem>
            <CoreValuesIcon src={SVG1} alt="Надёжные партнёрства" />
            <CoreValuesTitle>Надёжные партнёрства</CoreValuesTitle>
            <CoreValuesText>
              Только проверенные предложения и стабильные условия
            </CoreValuesText>
          </CoreValuesItem>
          <CoreValuesItem>
            <CoreValuesIcon src={SVG2} alt="Прозрачные процессы" />
            <CoreValuesTitle>Прозрачные процессы</CoreValuesTitle>
            <CoreValuesText>
              Никаких скрытых правил и сложных схем
            </CoreValuesText>
          </CoreValuesItem>
          <CoreValuesItem>
            <CoreValuesIcon src={SVG3} alt="Фокус на результате" />
            <CoreValuesTitle>Фокус на результате</CoreValuesTitle>
            <CoreValuesText>
              Чёткие метрики, аналитика и поддержка
            </CoreValuesText>
          </CoreValuesItem>
        </CoreValuesWrapper>
      </ContainerPading>
    </CoreValuesContainer>
  )
}

export default CoreValues
