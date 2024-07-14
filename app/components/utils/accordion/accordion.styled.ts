import styled from "styled-components";

export const AccordionWrapper = styled.div`
  width: 100%;
  border-color: ${(props) => props.theme.borderColors.primary};
  border-style: solid;
  border-width: 2px 0;
`;

export const AccordionItem = styled.div`
  padding: 20px 0;
`;

export const AccordionIcon = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;

export const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 800;
`;

export const AccordionDescription = styled.p`
  margin-top: 10px;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
`;
