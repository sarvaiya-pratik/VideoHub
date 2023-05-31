import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from "react-icons/ai"
import { Form } from 'react-router-dom'

const Upload = () => {
    return (
        <>
            <Container maxW={'container.xl'} h='100vh'>

                <VStack h='full' justifyContent={'center'}>

                    <AiOutlineCloudUpload size={'15vmax'} />
                    <form >
                        <HStack>

                            <Input type='file' css={{
                                "&::file-selector-button":{
                                    border:"none",
                                    width:"calc(30%)",
                                    height:'100%',
                                    backgroundColor:'white',
                                    color:'purple',
                                    marginLeft:'-18px',
                                    cursor:'pointer'
                                }
                            }} />
                            <Button colorScheme={'purple'} >Upload</Button>
                        </HStack>
                    </form>
                </VStack>


            </Container>
        </>
    )
}

export default Upload
