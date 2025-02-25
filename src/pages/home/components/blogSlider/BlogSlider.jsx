import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  color: white;
`

const BlogCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 5px;
`

const BlogCard = styled.div`
  width: 280px !important;
  height: 320px;
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

const BlogTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
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

const blogPosts = [
  {
    title: 'Тренды Front-end, которые будут с нами в 2025 году',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4', // Тестове відео
  },
  {
    title: 'Как криптовалюта изменит финансовый рынок',
    video: 'https://www.w3schools.com/html/movie.mp4', // Тестове відео
  },
  {
    title: 'Лучшие способы инвестирования в 2025',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4', // Тестове відео
  },
  {
    title: 'Блокчейн технологии: что нужно знать?',
    video: 'https://www.w3schools.com/html/movie.mp4', // Тестове відео
  },
]

const BlogSlider = () => {
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
      <h2>Блог</h2>
      <Slider {...settings}>
        {blogPosts.map((post, index) => (
          <BlogCardWrapper key={index}>
            <BlogCard>
              <VideoWrapper>
                <video
                  src={post.video}
                  controls
                  width="100%"
                  height="100%"
                  style={{ objectFit: 'cover' }}
                />
              </VideoWrapper>
              <BlogTitle>{post.title}</BlogTitle>
            </BlogCard>
          </BlogCardWrapper>
        ))}
      </Slider>

      <PaginationWrapper>
        <ProgressBar>
          {blogPosts.map((_, index) => (
            <ProgressItem key={index} active={index === currentSlide} />
          ))}
        </ProgressBar>

        <PageCounter>
          {currentSlide + 1} / {blogPosts.length}
        </PageCounter>
      </PaginationWrapper>
    </SliderWrapper>
  )
}

export default BlogSlider
