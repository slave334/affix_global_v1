import videoFile from '../../../../assets/videos/2_1.mp4'
const AboutProjectVideo = () => {
  return (
    <div>
      <video autoPlay loop muted playsInline width="100%">
        <source src={videoFile} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  )
}

export default AboutProjectVideo
