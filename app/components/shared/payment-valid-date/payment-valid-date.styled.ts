import styled from "styled-components";

export const PaymentValidDateWrapper = styled.div`
  font-size: ${(props) => props.theme.fontSizes.md};
  text-align: center;
  margin: 20px 0;

  span {
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 600;
  }

  p {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 800;
  }
`;
