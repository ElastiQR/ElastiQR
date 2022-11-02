const Menu = [
  {
    label: "Home",
    pathname: "/",
    requireSignedIn: true
  },
  {
    label: "My QRs",
    pathname: "/my-qrs",
    requireSignedIn: true
  },
  {
    label: "Create QR",
    pathname: "/create-qr",
    requireSignedIn: true
  },
  {
    label: "Signup",
    pathname: "/signup",
    requireSignedIn: false
  },
  {
    label: "Login",
    pathname: "/login",
    requireSignedIn: false
  },
  {
    label: "Profile",
    pathname: "/profile",
    requireSignedIn: true
  },
];

export default Menu;