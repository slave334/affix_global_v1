import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.32) 0%,
    rgba(0, 0, 0, 0.32) 100%
  );
  color: white;
  padding: 20px 0;

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
