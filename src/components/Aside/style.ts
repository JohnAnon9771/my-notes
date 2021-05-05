import styled from 'styled-components/'

export const Aside = styled.aside`
  position: relative;

  margin-top: 10vh;

  width: 265px;
  height: calc(100vh - 10vh - 100px);
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 18px;

  font-weight: 900;
  font-size: 1.8rem;

  height: 100%;

  a {
    display: flex;
    align-items: center;

    padding-left: 25px;
    padding-right: 50px;

    height: 65px;

    border-top-right-radius: var(--border-xl);
    border-bottom-right-radius: var(--border-xl);

    &.active {
      color: #fff;
      background-color: var(--bg-primary);
    }

    svg {
      margin-right: 15px;
    }
  }
`
