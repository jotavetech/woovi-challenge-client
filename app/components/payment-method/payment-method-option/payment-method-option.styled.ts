import styled from "styled-components";

interface StyledPaymentMethodOptionProps {
  isActivated?: boolean;
}

export const StyledPaymentMethodOption = styled.li<StyledPaymentMethodOptionProps>`
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
  border-style: solid;
  border-width: ${(props) => (props.isActivated ? "2px" : "2px 2px 0 2px")};
  list-style: none;
  padding: 2rem;

  border-color: ${(props) =>
    props.isActivated
      ? props.theme.backgroundColor.checked
      : props.theme.borderColor.primary};

  background-color: ${(props) =>
    props.isActivated && props.theme.backgroundColor.selected};

  &:first-child {
    margin-bottom: 3.4rem;
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

  > .option-details {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      span {
        font-size: ${(props) => props.theme.fontSizes.xl};
        font-weight: 800;
      }

      p {
        font-size: ${(props) => props.theme.fontSizes.xl};
        font-weight: 600;
      }
    }
  }

  > p {
    line-height: 20px;
  }

  .total-price {
    font-size: ${(props) => props.theme.fontSizes.md};
    font-weight: 600;
    color: ${(props) => props.theme.colors.secondary};
  }

  .special-promo {
    color: ${(props) => props.theme.colors.thirdiary};
    font-weight: 600;
  }

  .label {
    top: -14px;
    position: absolute;
    background-color: ${(props) => props.theme.backgroundColor.label};
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: 800;
    padding: 0.5rem 2rem;
    border-radius: 10rem;
  }

  .tag {
    margin-top: 1.1rem;
    position: relative;

    p {
      position: absolute;
      color: white;
      bottom: 0.85rem;
      left: 1rem;
      font-size: ${(props) => props.theme.fontSizes.sm};
    }

    img {
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
