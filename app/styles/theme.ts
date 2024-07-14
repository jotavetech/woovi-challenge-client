const theme = {
  colors: {
    primary: "#4D4D4D",
    secondary: "#AFAFAF",
    thirdiary: "#03D69D",
  },
  backgroundColor: {
    tag: "#133A6F",
    "button-primary": "#133A6F",
    "button-hover": "#0F2A4B",
    "button-disabled": "#E5E5E5",
    selected: "#F4FBF9",
    checked: "#03D69D",
    label: "#E5E5E5",
  },
  borderColor: {
    primary: "#E5E5E5",
    thirdiary: "#03D69D",
  },
  borderRadius: {
    option: "10px",
    button: "8px",
  },
  fontSizes: {
    xl: "24px",
    lg: "18px",
    md: "16px",
    sm: "14px",
  },
};

export type ThemeProps = typeof theme;

export default theme;
