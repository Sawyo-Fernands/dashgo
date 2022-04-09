import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";


type SideBarDrawerContextData=UseDisclosureReturn

export const SideBarDrawerContext=createContext({} as SideBarDrawerContextData)


interface SideBarDrawerProviderProps{
    children:ReactNode
}


export function SideBarDrawerProvider({children}:SideBarDrawerProviderProps){

    const disclosure=useDisclosure()

    return(
        <SideBarDrawerContext.Provider value={disclosure}>
            {
                children
            }
        </SideBarDrawerContext.Provider>
    )
}


export const useSideBarDrawer=()=>useContext(SideBarDrawerContext)
