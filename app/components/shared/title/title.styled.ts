import styled from "styled-components";

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 800;
`;
