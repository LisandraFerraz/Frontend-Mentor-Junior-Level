import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  Spacer,
  Divider,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import SectionTitle from "../section-title";

import playIcon from "./../../assets/icons/player_icon.svg";
import "./styles.scss";

export default function WordDetails(params: any) {
  return (
    <Flex flexDirection={"column"}>
      <Flex minWidth="800px" flexDirection={"row"} alignItems="center">
        <Box>
          <Text
            fontSize="5xl"
            fontFamily={"default"}
            fontWeight="bold"
            textTransform={"lowercase"}
            color="#2E2E2E"
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
          >
            <Image src={playIcon} />
          </Button>
        </Box>
      </Flex>

      {/* <SectionTitle secTitle="noun" /> */}

      <Flex alignItems="baseline" gap="3">
        <Text marginTop="40px" color="#2E2E2E80" fontWeight="semibold">
          Synonyms
        </Text>
        <span>smth</span>
      </Flex>
    </Flex>
  );
}
