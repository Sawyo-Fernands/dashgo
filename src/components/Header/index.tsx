import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri"
import { useSideBarDrawer } from "../../context/SidebarContext"
import { Logo } from "./Logo"
import { NotificationsNav } from "./NotificationsNav"
import { Profile } from "./Profile"
import { Search } from "./Search"

export function Header(){

      const isWideVersion=  useBreakpointValue({
          base:false,
          lg:true
      })

      const { onOpen }=useSideBarDrawer()

    return(
        <Flex as='header' w={'100%'} maxW={1400}
        h='20' mx={'auto'} mt={4} align='center' px={'6'}
        >
            {
                !isWideVersion && (
                    <IconButton icon={<Icon as={RiMenuLine}/>}
                     fontSize='24' variant={'unstyled'}  onClick={onOpen} aria-label="Open navigation" mr={2}>

                    </IconButton>
                )
            }
           
           <Logo/>
            { isWideVersion && (<Search/>)}

            <Flex align={'center'} marginLeft='auto'> 
                
             <NotificationsNav/>
            <Profile showProfileData={isWideVersion}/>

            </Flex>

        </Flex>


    )
}