import { Avatar, Box, Flex, Text } from "@chakra-ui/react";


export function Profile(){
    return(
        <Flex align='center'>
        <Box mr='4' textAlign={'right'}>
            <Text>
                sawyo fernands
            </Text>
            <Text color='gray.300' fontSize='small'>
                sawyo@hotmail.com
            </Text>
        </Box>
        <Avatar size='md' name="sawyo fernands" />
     </Flex>
    )
}