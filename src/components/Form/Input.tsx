import { FormControl, FormLabel, Input as InputChakra,InputProps as ChakraInputProps } from '@chakra-ui/react'

interface InputProps extends ChakraInputProps{
    name:string;
    label?:string;


} 

export function Input({name,label, ...rest}:InputProps){
    return(
        <FormControl>
                <FormLabel htmlFor={name} >{label}</FormLabel>

                <InputChakra name={name} id={name}  focusBorderColor='purple.500'
                bgColor={'gray.900'}  size='lg'
                variant='filled' _hover={{bgColor:'gray.900'}} 
                {...rest}
                />
          </FormControl>
        
    )
}