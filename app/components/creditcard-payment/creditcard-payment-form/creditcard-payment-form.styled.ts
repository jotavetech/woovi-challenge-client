import styled from "styled-components";

export const CreditCardPaymentFormWrapper = styled.form`
  margin: 20px 0;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.theme.backgroundColor["button-primary"]};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.backgroundColor["button-hover"]};
  }
`;
