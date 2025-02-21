import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MobileMenuWrapper = styled.div`
  .menu-toggle {
    font-size: 24px;
    cursor: pointer;
  }

  .menu {
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};
    text-align: center;
    padding: 20px 0;
  }

  .menu a {
    display: block;
    padding: 10px 0;
    color: white;
  }
`

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <MobileMenuWrapper open={menuOpen} className="mobile">
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <div className="menu">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </MobileMenuWrapper>
  )
}

export default MobileHeader
