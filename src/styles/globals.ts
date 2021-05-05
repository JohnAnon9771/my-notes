import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;

    font-family: 'Poppins';

    overflow: hidden;
  }

  :root {
    --bg-primary: #060505;
    --bg-secondary: #FFBF00;
    
    --border-sm: 5px;
    --border-md: 10px;
    --border-l: 15px;
    --border-xl: 30px;

    font-size: 10px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }
`
