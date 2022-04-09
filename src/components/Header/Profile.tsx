import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ShowProfileProps{
    showProfileData?:boolean;
}

export function Profile({showProfileData =true}:ShowProfileProps){
    return(
        <Flex align='center'>
            {
                showProfileData && (
             <Box mr='4' textAlign={'right'}>
                <Text>
                    sawyo fernands
                </Text>
                <Text color='gray.300' fontSize='small'>
                    sawyo@hotmail.com
                </Text>
            </Box>
                )
            }
        
        <Avatar size='md' name="sawyo fernands" />
     </Flex>
    )
}