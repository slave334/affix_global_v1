import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const BlogList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  list-style: none;
`

export const BlogTitleWrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
  @media (min-width: 1280px) {
  }
`
export const BlogCard = styled.div`
  background: #111;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition:
    height 0.5s ease,
    box-shadow 0.5s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 400px;
  ${({ expanded }) =>
    expanded &&
    `
    height: auto;
    box-shadow: 0px 6px 15px rgba(255, 255, 255, 0.2);
  `}

  @media (min-width: 768px) {
    max-width: 600px;
  }
  @media (min-width: 1280px) {
    max-width: 800px;
  }
`

export const BlogImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`

export const BlogTitle = styled.h2`
  color: #fff;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 35px;
  }
  @media (min-width: 1280px) {
    font-size: 40px;
  }
`

export const BlogText = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #8a8a8a;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;

  p {
    margin-bottom: 15px;
  }
`

export const BlogMeta = styled.p`
  color: #fff;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const ReadMoreButton = styled.button`
  background: transparent;
  color: #2b75dc;
  border: 1px solid #2b75dc;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;

  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #2b75dc;
    color: white;
  }
`
import BlogIMG from '../../../../assets/images/BlogImg.png'

const blogPosts = [
  {
    id: 1,
    title: 'События онлайн казино - выигрывайте сейчас!',
    text: 'Онлайн-казино предлагают игрокам захватывающие возможности выиграть захватывающие призы...',
    fullText:
      'При выборе онлайн-казино важно учитывать несколько факторов, таких как лицензия, репутация, бонусы, игровые автоматы и удобство вывода средств.\n\n' +
      'Надежные казино предлагают честные выплаты, прозрачные условия игры и поддержку пользователей.\n\n' +
      'Вы также можете воспользоваться специальными бонусами, которые дают дополнительные шансы на выигрыш.\n\n' +
      'Важно обращать внимание на условия бонусных программ и требования по их отыгрышу.',
    author: 'Джордан Рейнольдс',
    date: '10 октября 2024 г.',
    image: BlogIMG,
  },
  {
    id: 2,
    title: 'Как выбрать лучшее казино онлайн',
    text: 'Онлайн-казино предлагают игрокам захватывающие возможности выиграть захватывающие призы...',
    fullText:
      'При выборе онлайн-казино важно учитывать несколько факторов, таких как лицензия, репутация, бонусы, игровые автоматы и удобство вывода средств.\n\n' +
      'Надежные казино предлагают честные выплаты, прозрачные условия игры и поддержку пользователей.\n\n' +
      'Также стоит проверять отзывы других игроков, чтобы убедиться в надежности площадки.\n\n' +
      'Пользуйтесь только проверенными платформами с хорошей репутацией!',
    author: 'Анна Карпова',
    date: '15 октября 2024 г.',
    image: BlogIMG,
  },
]

const BlogContent = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <BlogList>
      {blogPosts.map((post, index) => (
        <motion.li
          key={post.id}
          layout
          initial={{ borderRadius: 10 }}
          animate={{ borderRadius: expandedIndex === index ? 20 : 10 }}
          transition={{ duration: 0.5 }}
        >
          <BlogCard expanded={expandedIndex === index}>
            <BlogTitleWrapp>
              <BlogImage src={post.image} alt={post.title} />
              <BlogTitle>{post.title}</BlogTitle>
            </BlogTitleWrapp>

            <BlogText expanded={expandedIndex === index}>
              {expandedIndex === index
                ? post.fullText
                    .split('\n')
                    .map((paragraph, i) => <p key={i}>{paragraph}</p>)
                : post.text}
            </BlogText>
            <BlogMeta>
              {post.author} • {post.date}
            </BlogMeta>
            <ReadMoreButton onClick={() => toggleExpand(index)}>
              {expandedIndex === index ? 'Скрыть' : 'Читать далее'}
            </ReadMoreButton>
          </BlogCard>
        </motion.li>
      ))}
    </BlogList>
  )
}

export default BlogContent
