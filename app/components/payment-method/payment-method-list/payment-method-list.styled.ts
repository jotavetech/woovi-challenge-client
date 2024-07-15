import styled from "styled-components";

export const PaymentMethodListWrapper = styled.div`
  width: 100%;
  margin-top: 32px;
  position: relative;
`;

export const PaymentMethodUlList = styled.ul``;

export const PaymentMethodButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  width: 100%;
  max-width: 429px;
  padding: 0 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export const PaymentMethodButton = styled.button`
  width: 100%;
  height: 40px;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 600;
  background-color: ${(props) =>
    props.theme.backgroundColors["button-primary"]};
  color: white;
  animation: pull-button 0.5s ease-in-out forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    background-color: ${(props) =>
      props.theme.backgroundColors["button-hover"]};
  }

  @keyframes pull-button {
    0% {
      transform: translateY(200px);
    }

    100% {
      transform: translateY(0);
    }
  }
`;
