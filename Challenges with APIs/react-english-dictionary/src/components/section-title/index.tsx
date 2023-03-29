import { Flex, Divider, Text } from "@chakra-ui/react";

export default function SectionTitle(params: any) {
  return (
    <Flex marginTop="30px" flexDirection="row" alignItems="center" gap="5">
      <Text color="#2E2E2E" fontSize="1.6rem" fontFamily="Delicious Handrawn">
        {params.secTitle}
      </Text>
      <Divider orientation="horizontal" marginTop="10px" />
    </Flex>
  );
}
