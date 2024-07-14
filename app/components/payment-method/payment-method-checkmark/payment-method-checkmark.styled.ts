import styled from "styled-components";

interface PaymentMethodCheckmarkWrapperProps {
  $isActivated?: boolean;
}

export const PaymentMethodCheckmarkWrapper = styled.div<PaymentMethodCheckmarkWrapperProps>`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.borderColor.primary};

  ${(props) =>
    props.$isActivated &&
    `
    background-color: ${props.theme.backgroundColor.checked};
    border-color: ${props.theme.backgroundColor.checked};
  `}
`;
