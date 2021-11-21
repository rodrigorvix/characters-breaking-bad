import React from "react";
import { GetStaticProps } from "next";

import { CharacterCardList } from "../components/CharacterCardList";
import { Header } from "../components/Header";

import { URLCharactersApi, URLEpisodiesApi } from "../utils/urls";

export default function Home({ characterList, episodiesList }) {
  return (
    <>
      <Header />
      <CharacterCardList
        characterList={characterList}
        episodiesList={episodiesList}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const fetchCharactersBreakingBad = await fetch(URLCharactersApi);
  const responseCharacters = await fetchCharactersBreakingBad.json();
  const characterList = await responseCharacters.map(
    ({ char_id, name, img, portrayed, nickname }) => {
      return {
        char_id,
        name,
        img,
        portrayed,
        nickname,
      };
    }
  );

  const fetchEpisodiesBreakingBad = await fetch(URLEpisodiesApi);
  const responseEpisodies = await fetchEpisodiesBreakingBad.json();
  const episodiesList = await responseEpisodies.map(
    ({ title, season, air_date, characters, episode }) => {
      return {
        title,
        season,
        air_date,
        characters,
        episode,
      };
    }
  );

  return {
    props: {
      characterList,
      episodiesList,
    },
    revalidate: 60 * 60,
  };
};
