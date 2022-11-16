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
        lightGray: "#F5F4F4",
        white: "#FFFFFF",
        green: "#62D2A2"
      },
      button: {
        green: "#62D2A2",
        darkGray: "#696969",
        mediumGray: "#AAAAAA",
        lightGray: "#F9F9F9",
        white: "#FFFFFF"
      },
      text: {
        white: "#FFFFFF",
        black: "#000000",
        gray: "#888888",
        green: "#62D2A2"
      },
      neutral: {
        main: "#757575"
      },
    },
    typography: {
      fontFamily: [
        '"Lato"',
        'sans-serif'
      ].join(',')
    },
    page: {
      width: "100vw",
      minHeight: "100vh",
      overflow: "hidden"
    },
    flex: {
      display: "flex",
      justifyContent: "center",
    },
    container: {
      maxWidth: 500,
      width: "80vw",
    },
    listTitle: {
      color: "#62D2A2",
      fontWeight: "bold",
      margin: "1rem 0"
    },
    buttonContainer: {
      marginBottom: "3vh"
    },
    button: {
      backgroundColor: "#62D2A2",
      color: "#FFFFFF",
      textTransform: "none",
      width: "100%",
      height: "100%",
      "&:hover": {
        backgroundColor: "#AAAAAA"
      }
    },
    buttonBase: {
      width: "100%",
      marginTop: "1rem",
      color: "#FFFFFF"
    },
    link: {
      textDecoration: "none"
    },
    card: {
      width: "100%",
      textAlign: "left",
      "&:hover": {
        boxShadow: "4px 4px 4px #AAAAAA",
        backgroundColor: "#F9F9F9"
      }
    },
    cardTitle: {
      color: "#000000",
      marginBottom: 5
    },
    cardDescription: {
      color: "#888888"
    },
    textInput: {
      padding: "4px"
    },
    passwordChecklist: {
      margin: "1rem 0 0.5rem"
    },
    notifications: {
      marginBottom: "0.5rem"
    },
    keepLoggedIn: {
      marginBottom: "0.25rem"
    },
    logInSignUpButton: {
      backgroundColor: "#62D2A2",
      color: "#FFFFFF",
      textTransform: "none",
      width: "100%",
      height: "100%",
      "&:hover": {
        backgroundColor: "#AAAAAA"
      },
      margin: "1rem 4px 4px 4px"
    },
    logInSignUpButtonContainer: {
      borderTop: "solid rgb(206, 206, 206) 1px",
      display: "flex",
      justifyContent: "center"
    },
    googleContainer: {
      borderTop: "solid rgb(206, 206, 206) 1px",
      display: "flex",
      justifyContent: "center",
      marginTop: "1rem"
    },
    googleLogIn: {
      backgroundColor: "#FFFFFF",
      color: "#696969",
      textTransform: "none",
      width: "100%",
      height: "100%",
      "&:hover": {
        backgroundColor: "#AAAAAA",
        color: "#FFFFFF"
      },
      margin: "1rem 4px 4px 4px",
      border: "1px solid #62D2A2"
    },
    navbarLogOutButton: {
      color: "#757575",
      "&:hover": {
        background: "none"
      }
    }
});

export default theme;