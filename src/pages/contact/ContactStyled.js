import styled from 'styled-components'

export const ContactWraper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (min-width: 1280px) {
    flex-direction: row-reverse;
  }
`

export const ContactContant = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 1280px) {
    max-width: 530px;
  }
`

export const ContactTitle = styled.h1`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 130%;
  letter-spacing: 0.12px;
  @media (min-width: 1280px) {
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }
`

export const ContactNavigate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ContactTitleEmail = styled.h1`
  color: #fff;
  text-align: left;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 31.2px */
  letter-spacing: 0.12px;
`
