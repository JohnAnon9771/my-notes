import styled from 'styled-components'

export const Select = styled.div`
  position: absolute;

  width: 100%;
  bottom: 0;

  font-size: 1.4rem;
  font-weight: bold;

  .custom-select {
    position: relative;
    width: 75%;
    height: 50px;

    opacity: 0.6;

    margin-left: auto;

    border: 2px solid var(--bg-primary);
    border-radius: var(--border-xl);

    .label {
      position: absolute;
      left: 35px;
      top: -16px;

      padding: 5px;

      background-color: #fff;
    }
  }
  .custom-dropdown {
    position: absolute;
    top: -90px;
    right: 0;

    width: 75%;
    padding: 20px;

    /* border: 1px solid var(--bg-primary); */
    border-radius: var(--border-xl);
    box-shadow: 5px 5px 0px 0px #289fed;
  }
`
