import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Theme } from '../styles/theme'
import { SideBarDrawerProvider } from '../context/SidebarContext'
import { makeServer } from '../services/mirage'

  if(process.env.NODE_ENV === 'development'){
    makeServer()
    
  }

function MyApp({ Component, pageProps }: AppProps ) {
  return (
    <ChakraProvider  theme={Theme}>
      <SideBarDrawerProvider>
      <Component {...pageProps} />
      </SideBarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
