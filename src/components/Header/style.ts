import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;

  padding: 10px;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .brand {
    font-size: 1.6rem;
  }
  .actions {
    gap: 10px;

    &__sound {
      border: none;
      background: none;
    }
  }
`
