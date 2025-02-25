import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'

// 📌 Styled Components
const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  color: white;
`

const ReviewCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 5px; /* 🔥 Зменшено відстань між картками */
`

const ReviewCard = styled.div`
  width: 280px !important;
  height: 320px; /* Фіксована ширина картки */
  background: #111;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  margin: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`

const VideoWrapper = styled.div`
  width: 100%;
  height: 160px;
  background: #222;
  border-radius: 10px;
  overflow: hidden;
`

const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`

const Position = styled.p`
  font-size: 14px;
  color: #bbb;
`

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`

const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`

const ProgressItem = styled.div`
  width: 30px;
  height: 4px;
  background: ${({ active }) => (active ? '#fff' : '#444')};
  border-radius: 2px;
`

const PageCounter = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`

const reviews = [
  {
    name: 'Алексей Бугров',
    position: 'IT-директор в компании ITL Team',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    name: 'Іван Петров',
    position: 'CEO в Digital Agency',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    name: 'Марина Лисенко',
    position: 'CMO в Startup Hub',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    name: 'Олег Тимошенко',
    position: 'Head of Sales в FinTech',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
]

const SliderReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '40px',
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  }

  return (
    <SliderWrapper>
      <h2>Что о нас говорят наши партнеры?</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <ReviewCardWrapper key={index}>
            <ReviewCard>
              <VideoWrapper>
                <video
                  src={review.video}
                  controls
                  width="100%"
                  height="100%"
                  style={{ objectFit: 'cover' }}
                />
              </VideoWrapper>
              <Name>{review.name}</Name>
              <Position>{review.position}</Position>
            </ReviewCard>
          </ReviewCardWrapper>
        ))}
      </Slider>

      {/* 📌 Пагінація у 2 форматах */}
      <PaginationWrapper>
        {/* 1️⃣ Прогрес-бар як на фото */}
        <ProgressBar>
          {reviews.map((_, index) => (
            <ProgressItem key={index} active={index === currentSlide} />
          ))}
        </ProgressBar>

        {/* 2️⃣ Цифрова пагінація */}
        <PageCounter>
          {currentSlide + 1} / {reviews.length}
        </PageCounter>
      </PaginationWrapper>
    </SliderWrapper>
  )
}

export default SliderReviews
