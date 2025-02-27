import React, { useState, useEffect } from 'react'
import FooterMobale from './footerMobale/FooterMobale'
import FooterDextop from './footerDextop/FooterDextop'
import { FooterWrapper } from './FooterStyled'

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <FooterWrapper>
      {isMobile ? <FooterMobale /> : <FooterDextop />}
    </FooterWrapper>
  )
}

export default Footer
