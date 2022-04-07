import { Flex,Input,Button, Stack,FormLabel,FormControl } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex w='100%' height='100vh' alignItems="center" justifyContent={'center'}>
      <Flex as={'form'} width='100%' maxW={'360px'} bg="gray.800" p={8} borderRadius={8} flexDirection="column">

        <Stack spacing={4}>

          <FormControl>
          <FormLabel htmlFor='email'>E-mail</FormLabel>
          <Input name='email' type={'email'}  focusBorderColor='purple.500'
           bgColor={'gray.900'} size='lg'
         variant='filled' _hover={{bgColor:'gray.900'}}/>
          </FormControl>

          <FormControl>
          <FormLabel htmlFor='password' >Senha</FormLabel>
           <Input name='password' type={'password'} focusBorderColor='purple.500'
           bgColor={'gray.900'}  size='lg'
           variant='filled' _hover={{bgColor:'gray.900'}}/>
          </FormControl>
          
        </Stack>
       
        <Button type='submit' mt={6} colorScheme="purple">Entrar</Button>
      </Flex>
    </Flex>
  )
}
