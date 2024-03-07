import React, { useState } from "react";
import { Box, Button, Flex, Heading, Image, Stack, Text, useToast } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const moodCards = [
  { mood: "Happy", image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlcnNvbnxlbnwwfHx8fDE3MDk4MTc0ODJ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { mood: "Energized", image: "https://images.unsplash.com/photo-1663426242582-7c707af07128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbmVyZ2l6ZWQlMjBwZXJzb258ZW58MHx8fHwxNzA5ODE3NDgzfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { mood: "Tired", image: "https://images.unsplash.com/photo-1554188572-9d184b57d8e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0aXJlZCUyMHBlcnNvbnxlbnwwfHx8fDE3MDk4MTc0ODR8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { mood: "Anxious", image: "https://images.unsplash.com/photo-1473106995954-101fc128abc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbnhpb3VzJTIwcGVyc29ufGVufDB8fHx8MTcwOTgxNzQ4NXww&ixlib=rb-4.0.3&q=80&w=1080" },
  { mood: "Motivated", image: "https://images.unsplash.com/photo-1555817129-2fa6b81bd8e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3RpdmF0ZWQlMjBwZXJzb258ZW58MHx8fHwxNzA5ODE3NDg2fDA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const toast = useToast();

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentCardIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    } else if (direction === "right") {
      setCurrentCardIndex((prevIndex) => (prevIndex < moodCards.length - 1 ? prevIndex + 1 : prevIndex));
    }

    // Log mood
    toast({
      title: `Mood logged: ${moodCards[currentCardIndex].mood}`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Flex minH="100vh" align="center" justify="center" p={5} direction="column">
      <Heading mb={8}>How are you feeling today?</Heading>
      <Box maxW="md" p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg" position="relative">
        {moodCards.map((card, index) => (
          <Box key={card.mood} transition="transform 0.5s ease-in-out" transform={index === currentCardIndex ? "scale(1)" : "scale(0.8)"} opacity={index === currentCardIndex ? 1 : 0} position={index === currentCardIndex ? "relative" : "absolute"} w="100%" h="100%">
            <Image src={card.image} alt={card.mood} boxSize="200px" borderRadius="full" mx="auto" />
            <Text fontSize="2xl" mt={3} textAlign="center">
              {card.mood}
            </Text>
          </Box>
        ))}
      </Box>
      <Stack direction="row" mt={6} spacing={4}>
        <Button leftIcon={<FaArrowLeft />} colorScheme="teal" variant="outline" onClick={() => handleSwipe("left")} isDisabled={currentCardIndex === 0}>
          Previous
        </Button>
        <Button rightIcon={<FaArrowRight />} colorScheme="teal" onClick={() => handleSwipe("right")} isDisabled={currentCardIndex === moodCards.length - 1}>
          Next
        </Button>
      </Stack>
    </Flex>
  );
};

export default Index;
