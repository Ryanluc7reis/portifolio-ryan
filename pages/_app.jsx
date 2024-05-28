import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../src/theme'
import { useEffect, useState } from 'react'
import Loading from '../src/components/loadingscreen/Loading'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  html,body {
    overflow-x: hidden;
    font-family : 'Roboto',sans-serif;
    margin: 0;
    width: 100%;
    

}  
  
`
function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </>
  )
}
export default App
