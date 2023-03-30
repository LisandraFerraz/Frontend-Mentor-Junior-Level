import { Box, Button, Flex, Text, Image, Spacer } from "@chakra-ui/react";

import playIcon from "./../../assets/icons/player_icon.svg";
import "./styles.scss";

export default function WordDetails(params: any) {
  const synonyms = params.synonyms;

  function playAudio() {
    let audio = new Audio(params.audioSource);

    console.log(audio.src.slice(-3));

    if (audio.src.slice(-3) === "mp3") {
      audio.play();
    } else {
      console.log("balls");
    }
  }

  return (
    <Flex flexDirection={"column"}>
      <Flex minWidth="800px" flexDirection={"row"} alignItems="center">
        <Box>
          <Text
            fontSize="5xl"
            fontFamily={"default"}
            fontWeight="bold"
            textTransform={"lowercase"}
          >
            {params.word}
          </Text>
          <Text fontSize="2xl" color="#A747ED">
            {params.phonetic}
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Button
            backgroundColor="#E9D0FA"
            _hover={{ bg: "#E9D0FA", opacity: "60%" }}
            borderRadius="100%"
            height="50px"
            width="50px"
            onClick={playAudio}
          >
            {/* <div>
              <audio controls src={params.audioSource} />
            </div> */}
            <Image src={playIcon} />
          </Button>
        </Box>
      </Flex>

      <Flex alignItems="baseline" gap="3">
        <Text marginTop="40px" opacity={"60%"} fontWeight="semibold">
          Synonyms
        </Text>
        {synonyms?.map((resp: any) => {
          return (
            <Text
              textTransform={"lowercase"}
              fontWeight={"extrabold"}
              color={"#a747ed"}
              key={resp}
            >
              {resp}
            </Text>
          );
        })}
      </Flex>
    </Flex>
  );
}
