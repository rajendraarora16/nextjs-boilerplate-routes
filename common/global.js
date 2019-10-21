import { createGlobalStyle } from "styled-components";

export const BodyLayoutCSS = createGlobalStyle`

    * {
        box-sizing: border-box;
        outline: none;
    }
    html, body {
        overflow-x: hidden;
    }

    html {
        font-family: sans-serif;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        overflow-y: scroll;
    }

    body {
        margin: 0;
        font-family: ${props =>
          props.fontFamily ? props.fontFamily : "'calibre', sans-serif"};
    }

    html,body
    {
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
    }
`;

/**
 * Globally screen size for devices.
 */
export const device = {
  mobilescreen: "only screen and (max-width: 768px)",
  xsmall: "(min-width: 320px) and (max-width: 767px)",
  small: "(min-width: 768px) and (max-width: 991px)",
  medium: "(min-width: 992px) and (max-width: 1279px)",
  large: "(min-width: 1280px) and (max-width: 1439px)",
  xlarge: "(min-width: 1440px)",
  xxlarge: "(min-width: 1600px)"
};
