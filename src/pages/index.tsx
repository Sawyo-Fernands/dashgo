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

  const { register, handleSubmit, formState: { errors,isSubmitting } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  
  const onSubmit = handleSubmit(async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(data);
  });

  return (
    <Flex w='100%' height='100vh' alignItems="center" justifyContent={'center'} >
      <Flex as={'form'} width='100%' maxW={'360px'} bg="gray.800" p={8} 
      borderRadius={8} flexDirection="column" onSubmit={onSubmit}>

        <Stack spacing={4}>
          <Input label='Usuário'  name="email" type='email' {...register('email')} error={errors.email}/>   
          
          <Input label='Senha' name='password' type='password' {...register('password')} error={errors.email}/> 
          
        </Stack>
       
        <Button type='submit' mt={6} colorScheme="purple" isLoading={isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}
