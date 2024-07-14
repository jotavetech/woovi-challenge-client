import styled from "styled-components";

export const IdentifierWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: center;
`;

export const IdentifierTitle = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 600;
`;

export const IdentifierID = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 800;
`;
