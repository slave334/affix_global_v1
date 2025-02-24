import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid #1b1b1c;
  backdrop-filter: blur(50px);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.32) 0%,
    rgba(0, 0, 0, 0.32) 100%
  );
  color: white;
  padding: 15px 15px 15px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mobile {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .desktop {
      display: none;
    }
    .mobile {
      display: flex;
    }
  }
`
