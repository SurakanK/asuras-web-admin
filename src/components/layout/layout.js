import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import useSiteMetadata from "./siteMetadata";
import GlobalStyle from "../styled/globalStyle";

import Footer from "../Footer";
import Navbar from "../Navbar";

const Main = styled.div`
  z-index: 0;
`;

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
