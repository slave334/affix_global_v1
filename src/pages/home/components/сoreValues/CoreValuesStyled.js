import styled from 'styled-components'

export const CoreValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`

export const CoreValuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  overflow: hidden;
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`

export const CoreValuesItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  background: #1b1b1c;
  transition:
    background 0.5s ease-in-out,
    box-shadow 0.5s ease-in-out;
`

export const CoreValuesIcon = styled.img`
  width: 50px;
  height: 50px;
`

export const CoreValuesTitle = styled.h2`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  @media (min-width: 1280px) {
    font-size: 22px;
  }
`

export const CoreValuesText = styled.span`
  color: #c9c6c6;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  @media (min-width: 1280px) {
    font-size: 18px;
  }
`
