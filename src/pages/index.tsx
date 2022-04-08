import { Flex,Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (
    <Flex w='100%' height='100vh' alignItems="center" justifyContent={'center'}>
      <Flex as={'form'} width='100%' maxW={'360px'} bg="gray.800" p={8} borderRadius={8} flexDirection="column">

        <Stack spacing={4}>
          <Input label='Usuário'  name="email" type='email'/>
          <Input label='Senha' name='password' type='password'/> 
        </Stack>
       
        <Button type='submit' mt={6} colorScheme="purple">Entrar</Button>
      </Flex>
    </Flex>
  )
}
