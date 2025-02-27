import React from 'react'
import BlogTitle from './components/blogTitle/BlogTitle'
import BlogContent from './components/blogContent/BlogContent'
import { BlogWrapper } from './BlogStyled'

const Blog = () => {
  return (
    <BlogWrapper>
      <BlogTitle />
      <BlogContent />
    </BlogWrapper>
  )
}

export default Blog
