import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";



export default function UserList(){
    return(
        <Box>
            <Header/>

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <SideBar/>
                <Box flex={'1'} borderRadius={8} bgColor='gray.800' p={'8'}>

                    <Flex mb={8} justify='space-between' alignItems={'center'}>
                        <Heading size={'lg'} fontWeight='normal'>Usuários</Heading>
                        <Button as={'a'} size='sm' fontSize={'15'} 
                        colorScheme='purple' leftIcon={<Icon as={RiAddLine}/>} >
                            Criar novo
                            </Button>
                    </Flex>
                    <Table colorScheme={'whiteAlpha'}>
                        <Thead>
                            <Tr>
                                <Th px={'6'} color='gray.300' width={'8'}>
                                    <Checkbox colorScheme={'purple'} _active={{border:'none',outline:'none'}}/>
                                </Th>
                                <Th>
                                    Usuário
                                </Th>
                                <Th>
                                    Data de Cadastro
                                </Th>
                                <Th w={8}></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td  px={'6'}>
                                <Checkbox colorScheme={'purple'} _active={{border:'none',outline:'none'}}/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight={'bold'}>Sawyo fernands</Text>
                                        <Text fontWeight={'normal'} fontSize='small' color={'gray.300'}>sawyo@hotmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    08 de Abril, 2022
                                </Td>
                                <Td>
                                <Button as={'a'} size='sm' fontSize={'14'} 
                                 colorScheme='blue'  leftIcon={<Icon as={RiPencilLine}/>}>
                                    Editar
                                </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td  px={'6'}>
                                <Checkbox colorScheme={'purple'} _active={{border:'none',outline:'none'}}/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight={'bold'}>Sawyo fernands</Text>
                                        <Text fontWeight={'normal'} fontSize='small' color={'gray.300'}>sawyo@hotmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    08 de Abril, 2022
                                </Td>
                                <Td>
                                <Button as={'a'} size='sm' fontSize={'14'} 
                                 colorScheme='blue'  leftIcon={<Icon as={RiPencilLine}/>}>
                                    Editar
                                </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                        
                        
                    </Table>
                <Pagination/>
                </Box>
            </Flex>
        </Box>
    )
}