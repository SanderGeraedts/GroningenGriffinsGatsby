import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

import Wrapper from "./wrapper"
import { breakpoint, font, color } from "./styles"
import logoImg from "../images/logo-empty.png"

const Header = styled.header``

const Logo = styled(Link)`
  font-family: ${font.header};
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  &:after {
    content: none;
  }

  img {
    width: auto;
    height: 60px;
    margin-right: 15px;

    @media (max-width: ${breakpoint.md}px) {
      height: 50px;
      margin-right: 5px;
    }
  }
`

const LogoText = styled.span`
  font-size: 48px;
  text-shadow: -2px 0px 0px ${color.accentDark};

  @media (max-width: ${breakpoint.md}px) {
    font-size: 36px;
    text-shadow: -1.5px 0px 0px ${color.accentDark};
  }

  @media (max-width: ${breakpoint.sm}px) {
    font-size: 24px;
    text-shadow: -1px 0px 0px ${color.accentDark};
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default ({ siteTitle }) => (
  <Header>
    <Wrapper>
      <Logo to="/">
        <img src={logoImg} alt="The Logo of the Groningen Griffins" />
        <LogoText>{siteTitle}</LogoText>
      </Logo>
    </Wrapper>
  </Header>
)
