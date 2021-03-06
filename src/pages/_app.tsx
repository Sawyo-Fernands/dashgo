import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Theme } from '../styles/theme'

import { SideBarDrawerProvider } from '../context/SidebarContext'
import { makeServer } from '../services/mirage'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from '../services/queryCliente'

  if(process.env.NODE_ENV === 'development'){
    makeServer()
    
  }


function MyApp({ Component, pageProps }: AppProps ) {
  return (
    <QueryClientProvider client={queryClient}>
     <ChakraProvider  theme={Theme}>
          <SideBarDrawerProvider>
          <Component {...pageProps} />
          </SideBarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools/>
    </QueryClientProvider>
   
  )
}

export default MyApp
