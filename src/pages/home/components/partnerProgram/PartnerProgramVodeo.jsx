import videoFile from '../../../../assets/videos/3_1.mp4'
const PartnerProgramVodeo = () => {
  return (
    <div>
      <video autoPlay loop muted playsInline width="100%">
        <source src={videoFile} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  )
}

export default PartnerProgramVodeo
