import { createGlobalStyle } from "styled-components";
import theme from "./theme";

// destructured theme properties
const { colors, fonts, mediaQueries } = theme;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;

    @media ${mediaQueries.desktopSmall} {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${colors.darkBlue};
    font-family: ${fonts.arial};
    line-height: 1;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    color: inherit;
    font-size: inherit;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }

  button {
	  cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }

  button,
  input,
  textarea {
    font-family: ${fonts.arial};
  }

  img,
  svg {
    border: 0;
    display: block;
    height: auto;
    max-width: 100%;
  }

  a {
    &:link,
    &:visited {
      text-decoration: none;
    }

    @media (hover) {
      &:hover,
      &:active,
      &:focus {
        outline: 0;
        text-decoration: underline;
      }
    }
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  audio,
  canvas,
  video {
    display: inline-block;
    max-width: 100%;
    zoom: 1;
  }

  /* react modal styling resets/adjustments */
  .ReactModalPortal {
    & > div {
      opacity: 0;
    }

    .ReactModal__Overlay {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 200ms ease-in-out;

      &--after-open {
        opacity: 1;
      }
    
      &--before-close {
        opacity: 0;
      }
    }
  }
`;

export default GlobalStyle;
