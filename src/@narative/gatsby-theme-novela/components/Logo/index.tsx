import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import mediaqueries from "@styles/media";
const commonStyles = p => css`
  font-weight: bold;
  color: ${p.theme.colors.primary};
  font-family: ${p.theme.fonts.serif};
`;

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */

const StyledLogo = styled.span`
  word-break: keep-all;
  font-size: 24px;
  line-height: 1.45;
  ${commonStyles};
  ${mediaqueries.tablet`
    font-size: 22px;
  `};
  ${mediaqueries.phablet`
    font-size: 20px;
  `};
`;
export default function Logo() {
  return (
    <>
      <StyledLogo>MH</StyledLogo>
    </>
  );
}
