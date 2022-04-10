import { Flex,Button, Stack, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import { Input } from '../components/Form/Input'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required('E-mail obrigatorio').email('E-mail invalido'),
  password: yup.string().required('Senha obrigatoria'),
}).required();

interface FormData{
  email:string;
  password:string
}

export default function SignIn() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  
  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <Flex w='100%' height='100vh' alignItems="center" justifyContent={'center'} >
      <Flex as={'form'} width='100%' maxW={'360px'} bg="gray.800" p={8} 
      borderRadius={8} flexDirection="column" onSubmit={onSubmit}>

        <Stack spacing={4}>
          <Input label='Usuário'  name="email" type='email' {...register('email')}/>   
          <Text color={'red.500'}>
          {errors.email?.message}
            </Text> 
          <Input label='Senha' name='password' type='password' {...register('password')}/> 
          <Text color={'red.500'}>
          {errors.password?.message}
            </Text>
        </Stack>
       
        <Button type='submit' mt={6} colorScheme="purple" >Entrar</Button>
      </Flex>
    </Flex>
  )
}
