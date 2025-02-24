import styled from 'styled-components'

export const ReviewsSection = styled.section`
  padding: 50px 20px;
  text-align: center;
  background: #1e1e1e;
`

export const ReviewsTitle = styled.h2`
  color: #ffdd2d;
  font-size: 24px;
  margin-bottom: 30px;
`

export const SwiperContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden; /* Запобігає зникненню карток */

  .swiper-slide {
    width: 280px !important; /* Фіксуємо ширину кожної картки */
  }
`

export const ReviewCard = styled.div`
  background: #2c2c2c;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(255, 203, 0, 0.3);
  text-align: left;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

export const ReviewText = styled.p`
  color: #fff;
  font-size: 16px;
`

export const ReviewAuthor = styled.span`
  font-size: 14px;
  color: #ffdd2d;
  font-weight: bold;
`

export const NavigationButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: rgba(255, 221, 45, 0.7);
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: black;

  &.swiper-button-prev {
    left: -50px;
  }

  &.swiper-button-next {
    right: -50px;
  }

  &:hover {
    background: #ffdd2d;
  }
`
