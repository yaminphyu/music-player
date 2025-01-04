import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";

let theme = createTheme({
  palette: {
    white: '#ffffff',
    primary: {
      main: '#fbe9e7',
    },
    secondary: {
      main: '#ff5722',
      dark: '#ff3d00',
      light: '#ffab91',
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
