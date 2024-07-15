import { Fade as FadeMui } from "@mui/material";

interface FadeProps {
  children: React.ReactElement;
  timeout: number;
}

export function Fade({ children, timeout }: FadeProps) {
  return (
    <FadeMui timeout={timeout} in>
      {children}
    </FadeMui>
  );
}
