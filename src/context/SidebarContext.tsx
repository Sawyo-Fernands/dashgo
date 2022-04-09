import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";


type SideBarDrawerContextData=UseDisclosureReturn

export const SideBarDrawerContext=createContext({} as SideBarDrawerContextData)


interface SideBarDrawerProviderProps{
    children:ReactNode
}


export function SideBarDrawerProvider({children}:SideBarDrawerProviderProps){

    const disclosure=useDisclosure()
    const router=useRouter()

    useEffect(()=>{
        disclosure.onClose()
    },[router.asPath])

    return(
        <SideBarDrawerContext.Provider value={disclosure}>
            {
                children
            }
        </SideBarDrawerContext.Provider>
    )
}


export const useSideBarDrawer=()=>useContext(SideBarDrawerContext)
