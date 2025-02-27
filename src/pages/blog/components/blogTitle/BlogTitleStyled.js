import styled from 'styled-components'

export const BlogTitleWrapper = styled.div``

export const BlogTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (min-width: 768px) {
    max-width: 530px;
    gap: 20px;
  }
  @media (min-width: 1280px) {
    max-width: 700px;
    gap: 30px;
  }
`

export const BlogTitleHeading = styled.h1`
  color: #fff;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 78px;
  }
  @media (min-width: 1280px) {
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 78px;
  }
`

export const BlogTitleText = styled.p`
  color: #fff;
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */
  letter-spacing: 0.5px;
  @media (min-width: 768px) {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
  }
  @media (min-width: 1280px) {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
  }
`
