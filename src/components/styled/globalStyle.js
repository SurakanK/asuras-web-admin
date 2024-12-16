import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #27374D;

    h1 {
      font-size: 36px;
      font-family: Mitr;
      font-weight: 500;

      @media (max-width: 1024px) {
        font-size: 30px;
      }

      @media (max-width: 768px) {
        font-size: 28px;
      }

      @media (max-width: 425px) {
        font-size: 24px;
      }
    }

    h2 {
      font-size: 28px;
      font-family: Mitr;
      font-weight: 400;

      @media (max-width: 1024px) {
        font-size: 22px;
      }

      @media (max-width: 768px) {
        font-size: 20px;
      }

      @media (max-width: 425px) {
        font-size: 18px;
      }
    }

    h3 {
      font-size: 24px;
      font-family: Mitr;
      font-weight: 300;

      @media (max-width: 1024px) {
        font-size: 20px;
      }

      @media (max-width: 768px) {
        font-size: 18px;
      }

      @media (max-width: 425px) {
        font-size: 16px;
      }
    }

    h4 {
      font-size: 20px;
      font-family: Mitr;
      font-weight: 300;

      @media (max-width: 1024px) {
        font-size: 18px;
      }

      @media (max-width: 768px) {
        font-size: 16px;
      }

      @media (max-width: 425px) {
        font-size: 14px;
      }
    }

    h5 {
      font-size: 18px;
      font-family: Mitr;
      font-weight: 300;

      @media (max-width: 1024px) {
        font-size: 16px;
      }

      @media (max-width: 768px) {
        font-size: 14px;
      }

      @media (max-width: 425px) {
        font-size: 12px;
      }
    }

    p {
      font-size: 20px;
      font-family: Mitr;
      font-weight: 300;

      @media (max-width: 1024px) {
        font-size: 18px;
      }

      @media (max-width: 768px) {
        font-size: 16px;
      }

      @media (max-width: 425px) {
        font-size: 14px;
      }
    }

    a {
      font-size: 16px;
      font-family: Mitr;
      font-weight: 300;

      @media (max-width: 1024px) {
        font-size: 14px;
      }

      @media (max-width: 768px) {
        font-size: 12px;
      }

      @media (max-width: 425px) {
        font-size: 10px;
      }
    }
  }
`;

export default GlobalStyle;
