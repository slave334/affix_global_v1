import styled from 'styled-components'

export const PartnerProgramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  @media (min-width: 1280px) {
    flex-direction: row-reverse;
  }
`

export const PartnerProgramContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  width: 100%;
  max-width: 450px;
`

export const PartnerProgramTitle = styled.h2`
  color: #fff;

  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%; /* 31.2px */
  letter-spacing: 0.12px;

  @media (min-width: 1280px) {
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: 0.16px;
  }
`

export const PartnerProgramText = styled.p`
  color: #fff;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.08px;
  @media (min-width: 1280px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: 0.08px;
  }
`

export const PartnerProgramButton = styled.button`
  color: #1b1b1c;
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 20.8px */
  letter-spacing: 0.08px;
  border-radius: 100px;
  background: #fff;
  display: flex;
  height: 48px;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  max-width: 250px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: none;
  &:hover {
    background: linear-gradient(135deg, #0044cc, #007bff);
    color: #fff;
    box-shadow: 0px 4px 15px rgba(0, 123, 255, 0.5);
  }

  &:active {
    transform: scale(0.96);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 8px 2px rgba(0, 123, 255, 0.7);
  }
`
