import React from "react";
import {
  Avatar,
  Button,
  Card,
  For,
  ClientOnly,
  Skeleton,
  Grid,
} from "@chakra-ui/react";

export default function Tcard() {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={2}
    >
      <For each={Array.from({ length: 20 })}>
        {(index) => (
          <ClientOnly fallback={<Skeleton boxSize={"1fr"} />}>
            <Card.Root
              variant="elevated"
              key={index}
              display="inline-block"
              _hover={{ boxShadow: "lg" }}
            >
              <Card.Body gap="2">
                <Avatar.Root size="lg" shape="rounded">
                  <Avatar.Image src="https://picsum.photos/200/300" />
                  <Avatar.Fallback name="Nue Camp" />
                </Avatar.Root>
                <Card.Title mb="2">Nue Camp</Card.Title>
                <Card.Description>
                  This is the card body. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </Card.Description>
              </Card.Body>
              <Card.Footer justifyContent="flex-end">
                <Button variant="outline">View</Button>
                <Button bg={"teal.600"} _hover={{ bg: "teal.400" }}>
                  Book
                </Button>
              </Card.Footer>
            </Card.Root>
          </ClientOnly>
        )}
      </For>
    </Grid>
  );
}
