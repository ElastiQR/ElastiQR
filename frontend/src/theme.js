import { createTheme } from '@material-ui/core/styles'

export const theme = createTheme({
    palette: {
      secondary: {
        main: "#62D2A2"
      },
      primary: {
        main: "#62D2A2"
      },
      background: {
        lightGray: "#F5F4F4"
      },
      button: {
        green: "#62D2A2",
        darkGray: "#696969",
        mediumGray: "#888888",
        lightGray: "#F9F9F9",
        white: "#FFFFFF"
      },
      text: {
        white: "#FFFFFF",
        black: "#000000",
        gray: "#888888",
        green: "#62D2A2"
      }
    },
    typography: {
      fontFamily: [
        '"Lato"',
        'sans-serif'
      ].join(',')
    }
});

export default theme;