import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

// 📌 Styled контейнер для секції
const SectionWrapper = styled.div`
  width: 100%;
  opacity: 0;
  transform: translateY(50px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  return (
    <SectionWrapper ref={ref} className={inView ? 'visible' : ''}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </SectionWrapper>
  )
}

export default FadeInSection
