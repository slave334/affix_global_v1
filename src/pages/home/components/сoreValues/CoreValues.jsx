import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
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

const coreValuesData = [
  {
    icon: SVG1,
    title: 'Надёжные партнёрства',
    text: 'Только проверенные предложения и стабильные условия',
  },
  {
    icon: SVG2,
    title: 'Прозрачные процессы',
    text: 'Никаких скрытых правил и сложных схем',
  },
  {
    icon: SVG3,
    title: 'Фокус на результате',
    text: 'Чёткие метрики, аналитика и поддержка',
  },
]

const CoreValues = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % coreValuesData.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <CoreValuesContainer>
      <ContainerPading>
        <CoreValuesWrapper>
          {coreValuesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                scale: activeIndex === index ? 1.05 : 1,
                opacity: activeIndex === index ? 1 : 0.85,
              }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{
                borderRadius: '20px',
                padding: '10px',
                display: 'flex',
                width: '100%',
              }}
            >
              <CoreValuesItem>
                <CoreValuesIcon src={item.icon} alt={item.title} />
                <CoreValuesTitle>{item.title}</CoreValuesTitle>
                <CoreValuesText>{item.text}</CoreValuesText>
              </CoreValuesItem>
            </motion.div>
          ))}
        </CoreValuesWrapper>
      </ContainerPading>
    </CoreValuesContainer>
  )
}

export default CoreValues
