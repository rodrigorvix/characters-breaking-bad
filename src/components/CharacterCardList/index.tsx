import React from "react";

import { Grid } from "@mui/material";

import { CharacterCard } from "../CharacterCard";

import { CharacterCardListStyle } from "./styles";

interface CharacterListType {
  char_id: number;
  name: string;
  img: string;
  portrayed: string;
  nickname: string;
}

interface EpisodiesListType {
  title: string;
  season: string;
  air_date: string;
  characters: Array<string>;
  episode: string;
}

interface CharacterCardListPropsType {
  characterList: Array<CharacterListType>;
  episodiesList: Array<EpisodiesListType>;
}
export function CharacterCardList(props: CharacterCardListPropsType) {
  const getDetailsCharacter = (name, nickname: string) => {
    const result = props.episodiesList.filter((episode) => {
      return (
        episode.characters.indexOf(name) !== -1 ||
        episode.characters.some((character) =>
          character.toUpperCase().includes(nickname.toUpperCase())
        )
      );
    });
    return result;
  };

  return (
    <CharacterCardListStyle>
      <Grid container spacing={2}>
        {props.characterList.map(
          ({ char_id, name, img, portrayed, nickname }) => {
            const details = getDetailsCharacter(name, nickname);

            return (
              <Grid item xs={6} sm={4} md={3} lg={2} key={char_id}>
                <CharacterCard
                  char_id={char_id}
                  name={name}
                  img={img}
                  portrayed={portrayed}
                  details={details}
                />
              </Grid>
            );
          }
        )}
      </Grid>
    </CharacterCardListStyle>
  );
}
