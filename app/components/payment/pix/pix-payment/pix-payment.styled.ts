import styled from "styled-components";

export const PixPaymentWrapper = styled.div`
  margin: 20px auto 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const PixPaymentQrcodeWrapper = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => props.theme.borderColors.thirdiary};
  border-radius: 10px;
`;

export const PixPaymentCopybutton = styled.button`
  width: 310px;
  height: 40px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 500;
  background-color: ${(props) =>
    props.theme.backgroundColors["button-primary"]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:active {
    background-color: ${(props) =>
      props.theme.backgroundColors["button-hover"]};
  }

  &:disabled {
    background-color: ${(props) =>
      props.theme.backgroundColors["button-hover"]};
    cursor: default;
  }
`;
