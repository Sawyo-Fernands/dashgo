import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";

import { useQuery } from 'react-query'

export default function UserList(){

    const { data,isLoading,error }=useQuery('users',async ()=>{

    const response=   await fetch('http://localhost:3000/api/users')
     const data=  await response.json()   
     
     const users=data.users.map(user=>{
         return{
             id:user.id,
             name:user.name,
             email:user.email,
             createdAt:new Date(user.createdAt).toLocaleDateString('pt-BR',{
                 day:'2-digit',
                 month:'long',
                 year:'numeric'
             })
         }
     })

       return users
    })


        const isWideVersion=useBreakpointValue({
            base:false,
            lg:true
        })

        useEffect(()=>{
                
        },[])

    return(
        <Box>
            <Header/>

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <SideBar/>
                <Box flex={'1'} borderRadius={8} bgColor='gray.800' p={'8'}>

                    <Flex mb={8} justify='space-between' alignItems={'center'}>
                        <Heading size={'lg'} fontWeight='normal'>Usuários</Heading>
                        <Link href={'/users/create'} passHref>
                        <Button as={'a'} size='sm' fontSize={'15'} 
                        colorScheme='purple' leftIcon={<Icon as={RiAddLine}/>} cursor='pointer'>
                            Criar novo
                            </Button>
                        </Link>
                    </Flex>
                    {
                        isLoading ? (
                            <Flex justify={'center'}>
                                <Spinner/>
                            </Flex>
                        ) : error ? (
                            <Flex justify={'center'}>
                                <Text> Falha ao obter dados dos usuários</Text>
                            </Flex>
                        ) : (
                           <>
                           <Table colorScheme={'whiteAlpha'}>
                        <Thead>
                            <Tr>
                                <Th px={['4','4','6']} color='gray.300' width={'8'}>
                                    <Checkbox colorScheme={'purple'} _active={{border:'none',outline:'none'}}/>
                                </Th>
                                <Th>
                                    Usuário
                                </Th>
                               {isWideVersion && <Th>
                                    Data de Cadastro
                                </Th>}
                                <Th w={8}></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                data.map(user=>(
                                    <>
                                <Tr key={user.id}>
                                <Td  px={['4','4','6']}>
                                <Checkbox colorScheme={'purple'} _active={{border:'none',outline:'none'}}/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight={'bold'}>{user.name}</Text>
                                        <Text fontWeight={'normal'} fontSize='small' color={'gray.300'}>{user.email}</Text>
                                    </Box>
                                </Td>
                               {isWideVersion &&  <Td>
                            {user.createdAt}
                                </Td>}
                                <Td>
                               {isWideVersion && <Button as={'a'} size='sm' fontSize={'14'} 
                                 colorScheme='pink'  leftIcon={<Icon as={RiPencilLine}/>} cursor='pointer'>
                                    Editar
                                </Button>}
                                </Td>
                            </Tr>
                                    </>
                                ))
                            }
                            
                        </Tbody>
                        
                        
                    </Table>
                <Pagination/>
                           </>
                        )
                    }
                </Box>
            </Flex>
        </Box>
        
    )
}