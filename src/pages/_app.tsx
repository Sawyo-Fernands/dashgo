import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Theme } from '../styles/theme'



function MyApp({ Component, pageProps }: AppProps ) {
  return (
    <ChakraProvider resetCSS theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
