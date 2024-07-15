import { Slide as SlideMui } from "@mui/material";

interface SlideProps {
  children: React.ReactNode;
  direction: "up" | "down" | "left" | "right";
  timeout: number;
}

export function Slide({ children, direction, timeout }: SlideProps) {
  return (
    <SlideMui direction={direction} timeout={timeout} in>
      <div>{children}</div>
    </SlideMui>
  );
}
