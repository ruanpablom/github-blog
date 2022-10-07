import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']}
  }

  body, input, span, h1, h2, h3, h4, h5, h6, strong, button, text {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
  }
`
