import styled from 'styled-components'

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;

  position: relative;
`

export const HeroVideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
`

export const HeroWrapperTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  padding-bottom: 60px;
`

export const HeroWrapperBottom = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;

  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0px 9px 24.7px 0px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(2.125px);
`

export const HeroTitle = styled.h1`
  color: #fff;
  text-align: center;

  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
`

export const HeroSubtitle = styled.span`
  color: #c8c6c7;
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.08px;
`

export const HeroButton = styled.button`
  color: #fff;
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.08px;
  border-radius: 20px;
  background: #2b75dc;
  padding: 14px 29px;
  border: none;
`

export const HeroBotomElLine = styled.div`
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  width: 100%;
`

export const HeroBotomElTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const HeroBotomElText = styled.p`
  color: #c9c6c6;
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const HeroBotomEl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  width: 100%;
`
