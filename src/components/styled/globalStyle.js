import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #27374D;

    h1 {
      font-size: 32px; /* ลดขนาดจาก 36px เป็น 32px */
      font-family: Mitr;
      font-weight: 500;

      @media (max-width: 1024px) {
        font-size: 28px; /* ลดขนาดจาก 30px เป็น 28px */
      }

      @media (max-width: 768px) {
        font-size: 26px; /* ลดขนาดจาก 28px เป็น 26px */
      }

      @media (max-width: 425px) {
        font-size: 22px; /* ลดขนาดจาก 24px เป็น 22px */
      }
    }

    h2 {
      font-size: 24px; /* ลดขนาดจาก 28px เป็น 24px */
      font-family: Mitr;
      font-weight: 400;

      @media (max-width: 1024px) {
        font-size: 20px; /* ลดขนาดจาก 22px เป็น 20px */
      }

      @media (max-width: 768px) {
        font-size: 18px; /* ลดขนาดจาก 20px เป็น 18px */
      }

      @media (max-width: 425px) {
        font-size: 16px; /* ลดขนาดจาก 18px เป็น 16px */
      }
    }

    h3 {
      font-size: 20px; /* ลดขนาดจาก 24px เป็น 20px */
      font-family: Mitr;
      font-weight: 300;

      @media (max-width: 1024px) {
        font-size: 18px; /* ลดขนาดจาก 20px เป็น 18px */
      }

      @media (max-width: 768px) {
        font-size: 16px; /* ลดขนาดจาก 18px เป็น 16px */
      }

      @media (max-width: 425px) {
        font-size: 14px; /* ลดขนาดจาก 16px เป็น 14px */
      }
    }

    h4 {
      font-size: 18px; /* ลดขนาดจาก 20px เป็น 18px */
      font-family: Mitr;
      font-weight: 300;

      @media (max-width: 1024px) {
        font-size: 16px; /* ลดขนาดจาก 18px เป็น 16px */
      }

      @media (max-width: 768px) {
        font-size: 14px; /* ลดขนาดจาก 16px เป็น 14px */
      }

      @media (max-width: 425px) {
        font-size: 12px; /* ลดขนาดจาก 14px เป็น 12px */
      }
    }

    h5 {
      font-size: 16px; /* ลดขนาดจาก 18px เป็น 16px */
      font-family: Mitr;
      font-weight: 300;

      @media (max-width: 1024px) {
        font-size: 14px; /* ลดขนาดจาก 16px เป็น 14px */
      }

      @media (max-width: 768px) {
        font-size: 12px; /* ลดขนาดจาก 14px เป็น 12px */
      }

      @media (max-width: 425px) {
        font-size: 10px; /* ลดขนาดจาก 12px เป็น 10px */
      }
    }

    p {
      font-size: 18px; /* ลดขนาดจาก 20px เป็น 18px */
      font-family: Mitr;
      font-weight: 300;

      @media (max-width: 1024px) {
        font-size: 16px; /* ลดขนาดจาก 18px เป็น 16px */
      }

      @media (max-width: 768px) {
        font-size: 14px; /* ลดขนาดจาก 16px เป็น 14px */
      }

      @media (max-width: 425px) {
        font-size: 12px; /* ลดขนาดจาก 14px เป็น 12px */
      }
    }

    a {
      font-size: 14px; /* ลดขนาดจาก 16px เป็น 14px */
      font-family: Mitr;
      font-weight: 300;

      @media (max-width: 1024px) {
        font-size: 12px; /* ลดขนาดจาก 14px เป็น 12px */
      }

      @media (max-width: 768px) {
        font-size: 10px; /* ลดขนาดจาก 12px เป็น 10px */
      }

      @media (max-width: 425px) {
        font-size: 8px; /* ลดขนาดจาก 10px เป็น 8px */
      }
    }
  }
`;

export default GlobalStyle;
