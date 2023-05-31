import React from 'react'
import { Box, Container, Heading, Image, Stack,Text } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
// import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"
const Home = () => {
    const headingOpation = {
        pos: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        textTransform: "uppecase",
        p: "4"
    }
    return (
        <Box>

            <Carousel preventMovementUntilSwipeScrollTolerance={true} autoPlay infiniteLoop interval={3000} showThumbs={false} showArrows={false} swipeScrollTolerance={100} showStatus={false}>
                <Box w="full" h="full">
                    <Image src={img1} h='100%' objectFit='cover' />
                    <Heading bgColor={'blackAlpha.600'} color="white" {...headingOpation}>Watch  the Feture</Heading>
                </Box>
                <Box w="full" h="100vh">
                    <Image src={img2}  h='full' objectFit='cover'/>
                    <Heading bgColor={'blackAlpha.600'} color="white" {...headingOpation}>Watch  the Feture</Heading>
                </Box>
                <Box w="full" h="100vh" >
                    <Image src={img3} h='full' objectFit='cover'/>
                    <Heading bgColor={'blackAlpha.600'} color="white" {...headingOpation}>Watch  the Feture</Heading>
                </Box>
            </Carousel>

            <Container maxW="container.xl"  h="100vh">
                <Heading borderBottom={'2px'} w="fit-content" m="auto" my="5">
                    Services
                </Heading>
                <Stack h={'full'} p='4' alignItems={'center'} direction={['column','row']}>
                    <Image src={img5} h={[40,400]} />
                    <Text letterSpacing={'widest'} lineHeight='190%' p={[4,16]} textAlign="center"> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium officiis voluptates eos voluptatibus. Rerum fugit odio quasi, amet quibusdam facere eligendi veritatis nobis aut, tempora quam accusantium magni nisi maxime tenetur esse. Asperiores, alias?
                        Lorem ipsum dolor  fugit odit!
                    </Text>
                </Stack>
            </Container>

        </Box>
    )
}




export default Home;
