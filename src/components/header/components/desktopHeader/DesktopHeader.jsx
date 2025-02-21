import { Link } from 'react-router-dom'

const DesktopHeader = () => {
  return (
    <nav className="desktop">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default DesktopHeader
