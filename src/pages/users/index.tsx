import { Box, Button, Checkbox, Flex, Heading, Icon, Link as ChakraLink, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import {  useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryCliente";



export default function UserList(){

    const [page,setPage]=useState(1)

    const { data,isLoading,error,isFetching }=useUsers(page)



        const isWideVersion=useBreakpointValue({
            base:false,
            lg:true
        })

      async function handlePrefetchUser(userId:number){
        await queryClient.prefetchQuery(['user',userId],async ()=>{
            const response=await api.get(`/user/${userId}`)

            return response.data
        },{
            staleTime:1000 * 60 * 18 // 10 minutos
        })
      }

    return(
        <Box>
            <Header/>

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <SideBar/>
                <Box flex={'1'} borderRadius={8} bgColor='gray.800' p={'8'}>

                    <Flex mb={8} justify='space-between' alignItems={'center'}>
                        <Heading size={'lg'} fontWeight='normal'>Usuários {
                            !isLoading && isFetching  && (
                                <Spinner size={'sm'} color='gray.500' ml={4}/>
                            )
                        }</Heading>
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
                                data.users.map(user=>(
                                    <>
                                <Tr key={user.id}>
                                <Td  px={['4','4','6']}>
                                <Checkbox colorScheme={'purple'} _active={{border:'none',outline:'none'}}/>
                                </Td>
                                <Td>
                                    <Box>
                                        <ChakraLink color={'purple.400'} onMouseEnter={()=>handlePrefetchUser(Number(user.id))}>
                                        <Text fontWeight={'bold'}>{user.name}</Text>
                                        </ChakraLink>
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
                <Pagination totalCountOfRegisters={data.totalCount} currentPage={page} onPageChange={setPage}/>
                           </>
                        )
                    }
                </Box>
            </Flex>
        </Box>
        
    )
}

