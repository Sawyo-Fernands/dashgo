import { Flex } from "@chakra-ui/react"
import { Logo } from "./Logo"
import { NotificationsNav } from "./NotificationsNav"
import { Profile } from "./Profile"
import { Search } from "./Search"

export function Header(){
    return(
        <Flex as='header' w={'100%'} maxW={1400}
        h='20' mx={'auto'} mt={4} align='center' px={'6'}
        >
           
           <Logo/>
            <Search/>

            <Flex align={'center'} marginLeft='auto'> 
                
             <NotificationsNav/>
            <Profile/>

            </Flex>

        </Flex>


    )
}