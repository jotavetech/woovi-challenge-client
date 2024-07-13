import styled from "styled-components";

export const PixPaymentSectionWrapper = styled.div`
  margin: 2rem auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const PixPaymentQrcodeWrapper = styled.div`
  width: 35rem;
  height: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.2rem solid ${(props) => props.theme.borderColor.thirdiary};
  border-radius: 1rem;
`;

export const PixPaymentCopybutton = styled.button`
  width: 31rem;
  height: 3.9rem;
  cursor: pointer;
  border: none;
  border-radius: 0.8rem;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 600;
  background-color: ${(props) => props.theme.backgroundColor["button-primary"]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme.backgroundColor["button-hover"]};
  }

  &:disabled {
    background-color: ${(props) => props.theme.backgroundColor["button-hover"]};
  }
`;
