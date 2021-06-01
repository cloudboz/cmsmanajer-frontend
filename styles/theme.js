import { createMuiTheme } from "@material-ui/core/styles";
import { blue, yellow, common } from "./color";
import poppins from "typeface-poppins";

// const poppins = {
//   fontFamily: "Poppins",
//   fontStyle: "normal",
//   fontDisplay: "swap",
//   fontWeight: 400,
//   src: `
//     url('/src/styles/fonts/Poppins-Regular.ttf')
//   `,
// };

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"],
    color: "#000",
  },
  palette: {
    primary: blue,
    secondary: yellow,
    common,
  },
  props: {
    MuiButtonBase: {
      // disableElevation: true,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [poppins],
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
        fontWeight: 600,
      },
      containedPrimary: {
        color: "black",
        backgroundColor: yellow.main,
        "&:hover": {
          backgroundColor: yellow.dark,
        },
      },
      containedSecondary: {
        color: "white",
      },
      containedSizeLarge: {
        padding: "10px 22px",
      },
    },
  },
});

export default theme;
