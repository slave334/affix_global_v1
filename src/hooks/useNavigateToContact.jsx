import { useNavigate } from 'react-router-dom'

const useNavigateToContact = () => {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate('/contact')
  }

  return handleRedirect
}

export default useNavigateToContact
