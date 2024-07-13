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
    left: 0.6rem;
    position: absolute;
    bottom: -2rem;
    width: 0.4rem;
    height: 100%;
    background-color: ${(props) => props.theme.borderColor.primary};
  }

  &:last-child::before {
    display: none;
  }
`;

export const InstallmentListDetail = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.primary};
`;

export const InstallmentCheckmark = styled.div<InstallmentCheckmarkProps>`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  border: 2px solid
    ${(props) =>
      props.$isActive || props.$isPaid
        ? props.theme.borderColor.thirdiary
        : props.theme.borderColor.primary};
  background-color: ${(props) =>
    props.$isPaid && props.theme.backgroundColor.checked};

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
