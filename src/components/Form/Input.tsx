import { FormControl, FormErrorMessage, FormLabel, Input as InputChakra,InputProps as ChakraInputProps } from '@chakra-ui/react'
import {forwardRef, ForwardRefRenderFunction} from "react"
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps{
    name:string;
    label?:string;
    error?:FieldError

} 

 const InputBase:ForwardRefRenderFunction<HTMLInputElement,InputProps>=({name,label,error=null, ...rest},ref)=>{
    return(
        <FormControl isInvalid={!!error}>
                <FormLabel htmlFor={name} >{label}</FormLabel>

                <InputChakra name={name} id={name}  focusBorderColor='purple.500'
                bgColor={'gray.900'}  size='lg'
                variant='filled' _hover={{bgColor:'gray.900'}} 
                ref={ref}
                {...rest}
                />
                {!!error && <FormErrorMessage>
                        {error.message}
                </FormErrorMessage>}
          </FormControl>
        
    )
}

export const Input=forwardRef(InputBase)