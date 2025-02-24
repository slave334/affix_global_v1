import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

//  <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//         ☰
//       </div>
//       <div className="menu">
//         <Link to="/" onClick={() => setMenuOpen(false)}>
//           Home
//         </Link>
//         <Link to="/about" onClick={() => setMenuOpen(false)}>
//           About
//         </Link>
//         <Link to="/contact" onClick={() => setMenuOpen(false)}>
//           Contact
//         </Link>
//       </div>
