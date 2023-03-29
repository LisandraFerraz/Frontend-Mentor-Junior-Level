import "./styles.scss";
import { Flex, Divider, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import { useEffect } from "react";

export default function SectionTitle(params: any) {
  let def = params.definitions;

  return (
    <>
      <Flex
        marginTop="30px"
        minWidth={"800px"}
        flexDirection="row"
        alignItems="center"
        gap="5"
      >
        <Text color="#2E2E2E" fontSize="1.6rem" fontFamily="Delicious Handrawn">
          {params.secTitle}
        </Text>
        <Divider orientation="horizontal" marginTop="10px" />
      </Flex>
      <Flex flexDirection="column" width={"800px"} marginTop="30px">
        <Text color="#2E2E2E80" fontWeight="semibold">
          Meaning
        </Text>
        <UnorderedList
          marginLeft="35px"
          marginTop="30px"
          spacing={4}
          color="#2E2E2E"
        >
          {def?.slice(0, 4).map((def: any) => {
            return <ListItem>{def.definition}</ListItem>;
          })}
        </UnorderedList>
      </Flex>
    </>
  );
}
