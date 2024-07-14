import styled from "styled-components";

interface InstallmentCheckmarkProps {
  $isActive: boolean;
  $isPaid: boolean;
}

export const InstallmentListItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;

  &::before {
    content: "";
    left: 6px;
    position: absolute;
    bottom: -20px;
    width: 4px;
    height: 100%;
    background-color: ${(props) => props.theme.borderColors.primary};
  }

  &:last-child::before {
    display: none;
  }
`;

export const InstallmentListDetail = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.primary};
`;

export const InstallmentCheckmark = styled.div<InstallmentCheckmarkProps>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid
    ${(props) =>
      props.$isActive || props.$isPaid
        ? props.theme.borderColors.thirdiary
        : props.theme.borderColors.primary};
  background-color: ${(props) =>
    props.$isPaid && props.theme.backgroundColors.checked};

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
