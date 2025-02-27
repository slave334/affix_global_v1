import videoFile from '../../../../assets/videos/3_1.mp4'
import styled from 'styled-components'
export const ContactVideoWrapp = styled.div`
  max-width: 500px;
`
const ContactVideo = () => {
  return (
    <ContactVideoWrapp>
      <video autoPlay loop muted playsInline width="100%">
        <source src={videoFile} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </ContactVideoWrapp>
  )
}

export default ContactVideo
