import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100% - 80px);
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  z-index: 999;
  /* display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; */
`

export const ModalContent = styled.div`
  position: fixed;

  right: 0;
  width: 70%;
  height: 500px;
  background: #111;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  border-bottom-left-radius: 20px;
`

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`

export const NavLinkItem = styled(Link)`
  color: white;
  font-size: 22px;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #2b75dc;
  }
`
