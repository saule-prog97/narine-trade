import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 96px;
    -webkit-text-size-adjust: 100%;
    /* Анимации появления сдвигают блоки по горизонтали —
       обрезаем, чтобы страница никогда не скроллилась вбок. */
    overflow-x: clip;
  }

  body {
    min-height: 100vh;
    background: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.text};
    font-family: ${({ theme }) => theme.font.body};
    font-size: 16px;
    line-height: 1.6;
    font-synthesis-weight: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: clip;
  }

  #root {
    position: relative;
    isolation: isolate;
  }

  img,
  picture,
  svg {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }

  ::selection {
    background: ${({ theme }) => theme.color.pink};
    color: #fff;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.bgDeep};
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(${({ theme }) => theme.color.pink}, ${({ theme }) => theme.color.violet});
    border-radius: 999px;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`
