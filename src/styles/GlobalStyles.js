import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  nav a {
    margin-right: 15px;
  }


  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.containerPadding};
  }

  /* Адаптивні налаштування */
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    .container {
      max-width: 960px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .container {
      max-width: 720px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .container {
      max-width: 100%;
      padding: 0 10px;
    }
  }
`
