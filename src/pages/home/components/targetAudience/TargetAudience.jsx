import React from 'react'
import {
  AudienceSection,
  AudienceTitle,
  AudienceList,
  AudienceItem,
  AudienceNumber,
  AudienceContent,
  AudienceHeading,
  AudienceText,
  TargetAudienceContainer,
} from './TargetAudienceStyled'
import { ContainerPading } from '../../../../styles/GlobalStyles'

const TargetAudience = () => {
  return (
    <TargetAudienceContainer>
      <ContainerPading>
        <AudienceSection>
          <AudienceTitle>Для кого GlobalAffiX?</AudienceTitle>
          <AudienceList>
            <AudienceItem>
              <AudienceNumber>01</AudienceNumber>
              <AudienceContent>
                <AudienceHeading>
                  Для профессионалов digital-маркетинга
                </AudienceHeading>
                <AudienceText>
                  которые хотят выйти на новый уровень
                </AudienceText>
              </AudienceContent>
            </AudienceItem>
            <AudienceItem>
              <AudienceNumber>02</AudienceNumber>
              <AudienceContent>
                <AudienceHeading>Для рекламодателей</AudienceHeading>
                <AudienceText>
                  которым нужен качественный трафик и сильные партнёрства
                </AudienceText>
              </AudienceContent>
            </AudienceItem>
            <AudienceItem>
              <AudienceNumber>03</AudienceNumber>
              <AudienceContent>
                <AudienceHeading>Для предпринимателей</AudienceHeading>
                <AudienceText>
                  ищущих эффективные инструменты монетизации
                </AudienceText>
              </AudienceContent>
            </AudienceItem>
          </AudienceList>
        </AudienceSection>
      </ContainerPading>
    </TargetAudienceContainer>
  )
}

export default TargetAudience
