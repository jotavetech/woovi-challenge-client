import styled from "styled-components";

export const FaqWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  border-top: 2px solid ${(props) => props.theme.borderColors.primary};
`;

export const FaqDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const FaqCET = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
`;

export const FaqTotalPrice = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
`;
