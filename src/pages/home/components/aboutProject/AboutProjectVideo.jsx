import videoFile from '../../../../assets/videos/2_1.mp4'
import styled from 'styled-components'

const VideoWrapper = styled.div`
  max-width: 420px;
`
const AboutProjectVideo = () => {
  return (
    <VideoWrapper>
      <video autoPlay loop muted playsInline width="100%">
        <source src={videoFile} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </VideoWrapper>
  )
}

export default AboutProjectVideo
