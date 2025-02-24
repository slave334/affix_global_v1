import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const DesktopHeaderWrapp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  justify-content: space-between;
`

export const DesktopHeaderNaw = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  justify-content: space-between;
`

export const DesktopHeaderButton = styled.button`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 2px solid #2b75dc;
  background: transparent;
  color: #2b75dc;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.5px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #2b75dc;
    color: white;
  }
`

export const DesktopHeaderLink = styled(Link)`
  color: #fff;
  text-align: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 0.5px;
  &:hover {
    color: #2b75dc;
  }
`
