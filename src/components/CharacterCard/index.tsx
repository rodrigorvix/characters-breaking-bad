import React, { useState } from "react";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { ModalCharacter } from "../ModalCharacter";

import { CardContainerStyle, CardContentStyle } from "./styles";

interface DetailsType {
  title: string;
  season: string;
  air_date: string;
  characters: Array<string>;
  episode: string;
}

interface CharacterCardType {
  char_id: number;
  name: string;
  img: string;
  portrayed: string;
  details: Array<DetailsType>;
}

export function CharacterCard({
  char_id,
  name,
  img,
  portrayed,
  details,
}: CharacterCardType) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CardContainerStyle>
        <CardActionArea onClick={handleOpen}>
          <CardMedia component="img" image={img} alt={name} />
          <CardContentStyle>
            <Typography gutterBottom variant="h5" component="p">
              {name}
            </Typography>
          </CardContentStyle>
        </CardActionArea>
      </CardContainerStyle>

      <ModalCharacter
        char_id={char_id}
        name={name}
        img={img}
        portrayed={portrayed}
        details={details}
        open={open}
        close={handleClose}
      />
    </>
  );
}
