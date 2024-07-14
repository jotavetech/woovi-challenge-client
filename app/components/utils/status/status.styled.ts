import styled from "styled-components";

export const StatusWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 300px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

type StatusIconProps = {
  $type: "success" | "error";
};

export const StatusIcon = styled.div<StatusIconProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$type === "success"
      ? props.theme.backgroundColors.success
      : props.theme.backgroundColors.error};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const StatusMessage = styled.p`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
`;
