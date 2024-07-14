import styled from "styled-components";

export const PixPaymentSectionWrapper = styled.div`
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
  border: 2px solid ${(props) => props.theme.borderColor.thirdiary};
  border-radius: 10px;
`;

export const PixPaymentCopybutton = styled.button`
  width: 310px;
  height: 40px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 600;
  background-color: ${(props) => props.theme.backgroundColor["button-primary"]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    background-color: ${(props) => props.theme.backgroundColor["button-hover"]};
  }

  &:disabled {
    background-color: ${(props) => props.theme.backgroundColor["button-hover"]};
  }
`;

export const PixPaymentValideDate = styled.div`
  font-size: ${(props) => props.theme.fontSizes.md};
  text-align: center;

  span {
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 600;
  }

  p {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 800;
  }
`;
