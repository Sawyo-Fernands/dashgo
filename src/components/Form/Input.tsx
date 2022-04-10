import { FormControl, FormLabel, Input as InputChakra,InputProps as ChakraInputProps } from '@chakra-ui/react'
import {forwardRef, ForwardRefRenderFunction} from 'react'

interface InputProps extends ChakraInputProps{
    name:string;
    label?:string;


} 

 const InputBase:ForwardRefRenderFunction<HTMLInputElement,InputProps>=({name,label, ...rest},ref)=>{
    return(
        <FormControl>
                <FormLabel htmlFor={name} >{label}</FormLabel>

                <InputChakra name={name} id={name}  focusBorderColor='purple.500'
                bgColor={'gray.900'}  size='lg'
                variant='filled' _hover={{bgColor:'gray.900'}} 
                ref={ref}
                {...rest}
                />
          </FormControl>
        
    )
}

export const Input=forwardRef(InputBase)