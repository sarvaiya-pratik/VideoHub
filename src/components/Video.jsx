import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const Video = () => {
   const videos = [ 
        { "description" : "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
          "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" ,
          "subtitle" : "By Blender Foundation",
          "thumb" : "images/BigBuckBunny.jpg",
          "title" : "Big Buck Bunny"
        },
        { "description" : "The first Blender Open Movie from 2006",
          "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" ,
          "subtitle" : "By Blender Foundation",
          "thumb" : "images/ElephantsDream.jpg",
          "title" : "Elephant Dream"
        },
        { "description" : "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
          "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" ,
          "subtitle" : "By Google",
          "thumb" : "images/ForBiggerBlazes.jpg",
          "title" : "For Bigger Blazes"
        },
        { "description" : "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
          "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" ,
          "subtitle" : "By Google",
          "thumb" : "images/ForBiggerEscapes.jpg",
          "title" : "For Bigger Escape"
        },
        { "description" : "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
          "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" ,
          "subtitle" : "By Google",
          "thumb" : "images/ForBiggerFun.jpg",
          "title" : "For Bigger Fun"
        },
        { "description" : "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
          "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" ,
          "subtitle" : "By Google",
          "thumb" : "images/ForBiggerJoyrides.jpg",
          "title" : "For Bigger Joyrides"
        },
        { "description" :"Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.", 
          "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" ,
          "subtitle" : "By Google",
          "thumb" : "images/ForBiggerMeltdowns.jpg",
          "title" : "For Bigger Meltdowns"
        }]
    const [myVideo,setMyVideo] = useState(videos[0].sources);
    const [heading,setHeading] = useState(videos[0].title)
    const [des,setDes] = useState(videos[0].description)
    return (
        <>
            <Stack direction={['column', 'row']}  p={0}> 

                <VStack w={'full'} >
                <video controls width="90%" autoPlay='true' src={myVideo}>
    

    </video>

                    <VStack overflowY='auto' p={6}>
                        <Heading>
                          {heading}
                        </Heading>
                        <Text p={4} >
                            {des}
                        </Text>
                    </VStack>
                </VStack >
                <VStack w={['full', '30%']}justifyContent='center' p={4}>
                   


        {

            videos.map((val,index)=>{
                return  <Button bgColor={'purple.400'} variant='ghost' width='80%' onClick={()=>setMyVideo(val.sources) & setHeading(val.title) & setDes(val.description)}>
                    Lecture {index+1}
                    </Button>
            })
        }
                        
                    
                    
                </VStack>


            </Stack>
        </>
    )
}

export default Video
