import styled from "styled-components";

interface MethodOptionProps {
  $isActivated?: boolean;
}

export const MethodOptionWrapper = styled.li<MethodOptionProps>`
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
  border-style: solid;
  border-width: ${(props) => (props.$isActivated ? "2px" : "2px 2px 0 2px")};
  list-style: none;
  padding: 20px;

  border-color: ${(props) =>
    props.$isActivated
      ? props.theme.backgroundColors.checked
      : props.theme.borderColors.primary};

  background-color: ${(props) =>
    props.$isActivated && props.theme.backgroundColors.selected};

  &:first-child {
    margin-bottom: 34px;
    border-width: 2px;
    border-radius: 10px;
  }

  &:nth-child(2) {
    border-radius: 10px 10px 0 0;
  }

  &:last-child {
    border-width: 2px;
    border-radius: 0 0 10px 10px;
  }
`;

export const MethodOptionDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 5px;

    span {
      font-size: ${(props) => props.theme.fontSizes.xl};
      font-weight: 800;
    }

    p {
      font-size: ${(props) => props.theme.fontSizes.xl};
      font-weight: 600;
    }
  }
`;

export const MethodOptionLabel = styled.p`
  top: -14px;
  position: absolute;
  background-color: ${(props) => props.theme.backgroundColors.label};
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 800;
  padding: 2px 20px;
  border-radius: 100px;
`;

export const MethodOptionSpecialDescription = styled.p`
  color: ${(props) => props.theme.colors.thirdiary};
  font-weight: 600;
`;

export const MethodOptionDescription = styled.p`
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondary};
`;

interface MethodOptionTagProps {
  $isActivated?: boolean;
}

export const MethodOptionTag = styled.div<MethodOptionTagProps>`
  margin-top: 11px;
  position: relative;
  width: 100%;
  height: 33px;
  background-color: ${(props) => props.theme.backgroundColors.tag};
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 10px;

  &::before {
    content: "";
    position: absolute;
    width: 33px;
    height: 33px;
    background-color: ${(props) =>
      props.$isActivated ? props.theme.backgroundColors.selected : "white;"};
    border-radius: 5px;
    right: -25px;
    transform: rotate(45deg);
  }

  p {
    color: white;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;
