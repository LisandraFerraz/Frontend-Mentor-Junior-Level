import {
  Button,
  Flex,
  Input,
  InputGroup,
  Image,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.scss";

import AppHeader from "./components/header";

import searchIcon from "./assets/icons/search_ icon.svg";
import WordDetails from "./components/word-details";

function App() {
  let [word, setWord] = useState();
  let [wordDetails, setWordDetails] = useState<any>([]);
  let [wordMeanings, setWordMeanings] = useState<any>([]);

  function defineWord(word: any) {
    setWord(word.target.value);
  }

  function searchWord() {
    // console.log(word);

    async function subscribeSearch() {
      let url = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      let data = await url.json();

      // verificar uma forma de gerar as secoes para cada meaning
      console.log(data[0].meanings.partOfSpeech);

      let getWordDefinition = {
        phonetic: data[0].phonetic,
        word: data[0].word,
      };

      let getWordMeanings = {
        noun: data[0].meanings[0],
        verb: data[0].meanings[1],
      };

      setWordDetails(() => [getWordDefinition]);
      console.log(wordDetails);
    }

    subscribeSearch();
  }

  return (
    <Flex flexDirection="column" alignItems="center" marginY="40px">
      <AppHeader />
      <Flex
        marginY="45px"
        flexDirection={"row"}
        minWidth="800px"
        align={"center"}
      >
        <InputGroup>
          <Input
            className="search-word-input"
            backgroundColor="#F4F4F4 "
            placeholder="keyboard..."
            borderRadius="12px"
            border="none"
            focusBorderColor="#E9D0FA"
            minHeight="55px"
            color="#2E2E2E"
            fontWeight={"extrabold"}
            position={"relative"}
            onChange={(e) => defineWord(e)}
          />
          <InputRightElement width={"fit-content"}>
            <Button
              top="8px"
              width={"60px"}
              _hover={{ bg: "transparent", opacity: "60%" }}
              backgroundColor="transparent"
              minHeight="55px"
              onClick={searchWord}
            >
              <Image src={searchIcon} height="18px" />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
      {wordDetails?.map((resp: any) => {
        return (
          <WordDetails
            key={resp.word}
            word={resp.word}
            phonetic={resp.phonetic}
          />
        );
      })}
    </Flex>
  );
}

export default App;
