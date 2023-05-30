import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../src/theme'
import { useEffect, useState } from 'react'
import Loading from '../src/components/loading/Loading'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  html,body {
    font-family : 'Roboto',sans-serif;
    overflow-x: hidden;
    width: 100%;
}  
  
`
function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
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
