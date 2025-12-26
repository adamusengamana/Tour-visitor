import { Badge, Box, HStack, Icon, Image, Text, For,Grid } from "@chakra-ui/react"
import { HiStar } from "react-icons/hi"
import { ClientOnly, Skeleton } from "@chakra-ui/react"


const Booking = () => {
  return (
      <Grid
  templateColumns={{ base: "1fr", sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
  gap={2} m={10}>   
   <For each={Array.from({ length: 100 })}>   
    {(item, index) => (
  <ClientOnly fallback={<Skeleton boxSize={"300px"} />}>
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden"  key={index} >
      <Image src={data.imageUrl} alt={data.imageAlt} />

      <Box p="4" spaceY="2">
        <HStack>
          <Badge colorPalette="teal" variant="solid">
            Superhost
          </Badge>
          <HStack gap="1" fontWeight="medium">
            <Icon color="orange.400">
              <HiStar />
            </Icon>
            <Text>
              {data.rating} ({data.reviewCount})
            </Text>
          </HStack>
        </HStack>
        <Text fontWeight="medium" color="fg">
          {data.title}
        </Text>
        <HStack color="fg.muted">
          {data.formattedPrice} • {data.beds} beds
        </HStack>
      </Box>
      
    </Box>
   </ClientOnly>
  )}
    </For>
     </Grid>
    
  )
}

const data = {
  imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  title: "Modern home in city center in the heart of historic Los Angeles",
  formattedPrice: "$435",
  reviewCount: 34,
  rating: 4.5,
}
export default Booking;

// Note: The above code is a complete React component for a booking card using Chakra UI. It displays an image, a badge, rating, title, and price information.