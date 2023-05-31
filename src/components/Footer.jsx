import { Box, Heading, HStack, Input, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const Footer = () => {
    return (
        <Box borderTop={'1px'}>
            <Stack  h={["60vh","30vh"]} direction={['column', 'row']} alignItems='center' justifyContent={['center','space-around']}>
                <VStack  p={4} >
                    <Heading fontSize={'20'}>
                        subscribe to get update
                    </Heading>
                    <HStack>
                        <Input border='1px solid' />
                       <Text cursor={'pointer'} bgColor={'white'} color='black' p='2' borderRadius={'0 9px 9px 0'}>
                        <AiOutlineSend />
                        
                        </Text> 
                    </HStack>
                </VStack>

                <VStack p={4} >
                    <Heading fontSize={'20'} textTransform='uppercase'>
                       Video Hub
                    </Heading>
                    <Text>All Right &copy; 2030 are reserved</Text>
                </VStack>
                <VStack p={4}>
                    <Heading fontSize={'20'}>
                        Follow Us
                    </Heading>
                    <Text>Instagram</Text>
                    <Text>You tube</Text>
                    <Text>Twitter</Text>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer
