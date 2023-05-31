import React from 'react'
import {Drawer,DrawerBody,DrawerContent,DrawerCloseButton,DrawerOverlay,Button, useDisclosure, DrawerHeader, VStack, HStack} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'
import {BiMenuAltLeft} from "react-icons/bi"
const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure();
  return (
    <>
        <Button pos="absolute" zIndex={12} onClick={onOpen} position={'fixed'} size="30" borderRadius='full' h="10" w={10} top={4} left={4} colorScheme="purple">
            <BiMenuAltLeft size={'20'}/>
        </Button>


        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
           <DrawerOverlay/>
           <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>
                    Video Hub
                </DrawerHeader>
                <DrawerBody>
                    <VStack >
                        <NavLink to="/"> <Button onClick={onClose} colorScheme="purple" variant="ghost">Home  </Button></NavLink>
                         <NavLink to="/video"><Button onClick={onClose} colorScheme="purple" variant="ghost">Videos </Button></NavLink> 
                         <NavLink to="/video"><Button onClick={onClose} colorScheme="purple" variant="ghost">Free Videos </Button></NavLink> 
                        <NavLink to="/upload"> <Button onClick={onClose} colorScheme="purple" variant="ghost">Upload Video </Button></NavLink> 
                    </VStack>

                    <HStack justifyContent="center" pos="absolute" bottom="6" right="2" w="full">
                        <Button onClick={onClose} colorScheme="purple"><NavLink  to="/login">login</NavLink></Button>
                        <Button onClick={onClose} colorScheme="purple" variant={"outline"}><NavLink   to="/signup">Sign Up</NavLink></Button>
                    </HStack>
                </DrawerBody>
           </DrawerContent>
        </Drawer>
    </>
  )
}

export default Header
