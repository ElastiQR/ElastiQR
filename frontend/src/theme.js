import { green } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'

export const theme = createTheme({
    palette: {
      secondary: {
        main: green[50]
      },
      primary: {
        main: '#62D2A2'
      }
    },
    typography: {
      fontFamily: [
        '"Lato"',
        'sans-serif'
      ].join(',')
    }
});