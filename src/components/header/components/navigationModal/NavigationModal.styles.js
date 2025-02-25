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
  width: 85%;
  height: 500px;
  background: #111;
  padding: 20px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  border-bottom-left-radius: 20px;
`
export const NavBtnWrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
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

export const NavBtnTelegram = styled.button`
  border: 1px solid #039be5;
  color: #039be5;
  background: transparent;
  border-radius: 100px;
  display: flex;
  width: 250px;
  padding: 10px 15px;
  align-items: center;
  justify-content: space-between;

  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.07px;
`
export const NavBtnWhatsapp = styled.button`
  border: 1px solid #29a71a;
  color: #29a71a;
  background: transparent;
  border-radius: 100px;
  display: flex;
  width: 250px;
  padding: 10px 15px;
  align-items: center;
  justify-content: space-between;

  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.07px;
`
