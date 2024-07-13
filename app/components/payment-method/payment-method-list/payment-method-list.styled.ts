import styled from "styled-components";

export const PaymentMethodListWrapper = styled.div`
  width: 100%;
  margin-top: 3.2rem;
  position: relative;

  ul {
    list-style: none;
  }
`;

export const PaymentMethodButtonWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  width: 100%;
  max-width: 42.9rem;
  padding: 0 2rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const PaymentMethodButton = styled.button`
  width: 100%;
  height: 3.9rem;
  padding: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.8rem;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 600;
  background-color: ${(props) => props.theme.backgroundColor["button-primary"]};
  color: white;
  animation: pull-button 0.5s ease-in-out forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme.backgroundColor["button-hover"]};
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
