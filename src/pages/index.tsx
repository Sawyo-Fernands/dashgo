import { Flex,Button, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import { Input } from '../components/Form/Input'

interface FormData{
  email:string;
  password:string
}

export default function SignIn() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <Flex w='100%' height='100vh' alignItems="center" justifyContent={'center'} >
      <Flex as={'form'} width='100%' maxW={'360px'} bg="gray.800" p={8} 
      borderRadius={8} flexDirection="column" onSubmit={onSubmit}>

        <Stack spacing={4}>
          <Input label='Usuário'  name="email" type='email' {...register('email')}/>
          <Input label='Senha' name='password' type='password' {...register('password')}/> 
        </Stack>
       
        <Button type='submit' mt={6} colorScheme="purple">Entrar</Button>
      </Flex>
    </Flex>
  )
}
