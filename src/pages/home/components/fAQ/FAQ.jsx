import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FAQWrapper,
  FAQTitle,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  ArrowIcon,
  FAQWrapperContent,
  FAQList,
} from './FAQ.styles'
import { ContainerPading } from '../../../../styles/GlobalStyles'

const faqData = [
  {
    question: '?????????',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    question: '?????????',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    question: '?????????',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    question: '?????????',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <FAQWrapper>
      <ContainerPading>
        <FAQWrapperContent>
          <FAQTitle>Часто задаваемые вопросы</FAQTitle>
          {faqData.map((item, index) => (
            <FAQItem key={index}>
              <FAQQuestion
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <ArrowIcon isOpen={openIndex === index}>▼</ArrowIcon>
              </FAQQuestion>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <FAQAnswer>{item.answer}</FAQAnswer>
              </motion.div>
            </FAQItem>
          ))}
        </FAQWrapperContent>
      </ContainerPading>
    </FAQWrapper>
  )
}

export default FAQ
