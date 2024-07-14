import styled from "styled-components";

export const AnimatedConfirmationWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 300px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AnimatedConfirmationIcon = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.backgroundColor.checked};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
