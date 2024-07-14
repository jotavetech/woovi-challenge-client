import styled from "styled-components";

export const InputFieldErrorMessage = styled.p`
  margin-top: 2px;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.error};
  font-weight: 600;
`;
