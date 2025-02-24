import styled from 'styled-components'

export const FAQWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FAQWrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const FAQTitle = styled.h2``

export const FAQItem = styled.div``

export const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: ${({ isOpen }) => (isOpen ? '#fff' : '#1B1B1C')};
  color: ${({ isOpen }) => (isOpen ? '#1B1B1C' : '#fff')};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.16px;
  padding: 15px 20px;
  border-radius: 20px;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    border-radius 0.3s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    `
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  `}
`

export const FAQAnswer = styled.div`
  background: #1b1b1c;
  padding: 15px 20px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.07px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

export const ArrowIcon = styled.span`
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  display: inline-block;
`
