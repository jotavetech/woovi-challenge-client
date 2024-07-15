import styled from "styled-components";

interface MethodCheckmarkWrapperProps {
  $isActivated?: boolean;
}

export const MethodCheckmarkWrapper = styled.div<MethodCheckmarkWrapperProps>`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.borderColors.primary};

  ${(props) =>
    props.$isActivated &&
    `
    background-color: ${props.theme.backgroundColors.checked};
    border-color: ${props.theme.backgroundColors.checked};
  `}
`;
