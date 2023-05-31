import React from 'react'
import { Button, Container, Heading, HStack, Input, Stack, VStack,Text, Avatar} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
    <Container maxW={['100vw','container.xl']} h='100vh'>

    <form >

        <VStack alignItems='stretch' p='4' spacing={5} w='96' m='auto' my='16'>

            <Heading> Sign Up </Heading>
            <Avatar alignSelf='center' boxSize={20}/>
            <Input placeholder='First Name' type='text' required />
            <Input placeholder='Last Name' type='text' required />
            <Input placeholder='Enter email' type='email' required />
            <Input placeholder='New password' type='password' required />
            <Input placeholder='Confirm Password' type='password' />
           
            <HStack alignSelf={'flex-end'} >
            <Text>have you already account ?</Text>
            <Button variant='link'><NavLink to="/login">Log in </NavLink></Button>
            </HStack>
            <Button type='submit'><NavLink>Sign Up</NavLink></Button>

        </VStack>
    </form>




</Container>
  )
}

export default SignUp
