import { Button, Container, Heading, HStack, Input, Stack, VStack,Text} from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <Container maxW={['100vw','container.xl']} h='100vh'>

                <form >

                    <VStack alignItems='stretch' p='4' spacing={5} w='96' m='auto' my='16'>

                        <Heading>  Welcome Back </Heading>
                        <Input placeholder='Username..' required />
                        <Input placeholder='Password' />
                        <Button alignSelf={'flex-end'} variant='link'><NavLink>Forgate Password </NavLink></Button>
                        <HStack alignSelf={'flex-end'} >
                        <Text>are you new user ?</Text>
                        <Button variant='link'><NavLink to="/signup">Sign Up </NavLink></Button>
                        </HStack>
                        <Button><NavLink>LOGIN</NavLink></Button>

                    </VStack>
                </form>




            </Container>
        </>
    )
}

export default Login
