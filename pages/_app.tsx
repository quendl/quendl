import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from "../components/Layout/Layout";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }: AppProps) {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#d0fa2d',
      },
    },
  });

  return(<ThemeProvider theme={theme}>
    <Layout preview={"..."}>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>)
}

export default MyApp
