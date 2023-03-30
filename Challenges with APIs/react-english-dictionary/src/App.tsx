import {
  Button,
  Flex,
  Input,
  InputGroup,
  Image,
  InputRightElement,
  useToast,
  Divider,
  Text,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.scss";

import GlobalStyle from "./theme-styles/global";
import light from "./theme-styles/light";
import dark from "./theme-styles/dark";
import { ThemeProvider } from "styled-components";

import AppHeader from "./components/header";
import searchIcon from "./assets/icons/search_ icon.svg";
import WordDetails from "./components/word-details";
import SectionTitle from "./components/section-title";

function App() {
  const [theme, setTheme] = useState(light);

  let [word, setWord] = useState();
  let [wordDetails, setWordDetails] = useState<any>([]);
  let [wordMeanings, setWordMeanings] = useState<any>([]);
  let [license, setLicense] = useState("");

  const toggleTheme = () => {
    setTheme(theme.title == "light" ? dark : light);
  };

  const toast = useToast({
    title: "Word not found.",
    variant: "variant",
    isClosable: true,
    status: "error",
    containerStyle: {
      backgroundColor: "#A747ED",
      color: "#fff",
      borderRadius: "15px",
    },
  });

  function defineWord(word: any) {
    setWord(word.target.value);
  }

  function searchWord() {
    async function subscribeSearch() {
      try {
        let url = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        let data = await url.json();

        let getWordDefinition = {
          phonetic: data[0].phonetic,
          word: data[0].word,
          synonyms: data[0].meanings[0].synonyms,
          // try to find a way to get the one with the mp3
          audio: data[0].phonetics[0].audio,
        };

        let getWordMeanings = {
          meaning1: data[0].meanings[0],
          meaning2: data[0].meanings[1],
          meaning3: data[0].meanings[2],
          meaning4: data[0].meanings[3],
        };

        setWordDetails(() => [getWordDefinition]);
        setWordMeanings(() => [getWordMeanings]);
        setLicense(() => data[0].sourceUrls[0]);

        console.log(data[0].phonetics);
      } catch (e) {
        toast();
        console.log(e);
      }
    }
    subscribeSearch();
  }

  return (
    <ThemeProvider theme={theme}>
      <Flex flexDirection="column" alignItems="center" marginY="40px">
        <GlobalStyle />
        <AppHeader toggleTheme={toggleTheme} />
        <Flex
          marginY="45px"
          flexDirection={"row"}
          minWidth="800px"
          align={"center"}
        >
          <InputGroup>
            <Input
              className="search-word-input"
              placeholder="keyboard..."
              borderRadius="12px"
              backgroundColor="#f4f4f425"
              focusBorderColor="#E9D0FA"
              minHeight="55px"
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
              synonyms={resp.synonyms}
              audioSource={resp.audio}
            />
          );
        })}
        {wordMeanings?.map((t: any) => {
          return (
            <>
              {t.meaning1 ? (
                <SectionTitle
                  key={t.meaning1.partOfSpeech}
                  secTitle={t.meaning1.partOfSpeech}
                  definitions={t.meaning1.definitions}
                />
              ) : (
                ""
              )}

              {t.meaning2 ? (
                <SectionTitle
                  key={t.meaning2.partOfSpeech}
                  secTitle={t.meaning2.partOfSpeech}
                  definitions={t.meaning2.definitions}
                />
              ) : (
                ""
              )}

              {t.meanin4 ? (
                <SectionTitle
                  key={t.meaning3.partOfSpeech}
                  secTitle={t.meaning3.partOfSpeech}
                  definitions={t.meaning3.definitions}
                />
              ) : (
                ""
              )}

              {t.meaning4 ? (
                <SectionTitle
                  key={t.meaning4.partOfSpeech}
                  secTitle={t.meaning4.partOfSpeech}
                  definitions={t.meaning4.definitions}
                />
              ) : (
                ""
              )}
            </>
          );
        })}
        {license ? (
          <>
            <Divider
              width={"800px"}
              marginTop="50px"
              orientation="horizontal"
            />
            <Flex gap={"5"} width="800px" marginTop={"30px"}>
              <Text opacity={"60%"} fontWeight="bold">
                Source:
              </Text>
              <Link href={license} isExternal textDecoration={"underline"}>
                {license}
              </Link>
            </Flex>
          </>
        ) : (
          <></>
        )}
      </Flex>
    </ThemeProvider>
  );
}

export default App;
