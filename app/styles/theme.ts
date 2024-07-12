const theme = {
  colors: {
    primary: "#4D4D4D",
    secondary: "#AFAFAF",
    thirdiary: "#03D69D",
  },
  backgroundColor: {
    tag: "#133A6F",
    "button-primary": "#133A6F",
    selected: "#F4FBF9",
    checked: "#03D69D",
    label: "#E5E5E5",
  },
  borderColor: {
    primary: "#E5E5E5",
  },
  borderRadius: {
    option: "10px",
    button: "8px",
  },
  fontSizes: {
    xl: "2.4rem",
    lg: "1.8rem",
    md: "1.6rem",
    sm: "1.4rem",
  },
};

export type ThemeProps = typeof theme;

export default theme;
