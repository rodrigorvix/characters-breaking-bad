import React, { useState } from "react";

import Modal from "@mui/material/Modal";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { ButtonDetails } from "../ButtonDetails";
import { ModalDetails } from "../ModalDetails";

import { ModalCardStyle, CardContentStyle, ButtonDetailsStyle } from "./styles";

interface DetailsType {
  title: string;
  season: string;
  air_date: string;
  characters: Array<string>;
  episode: string;
}

interface ModalCharacterPropsType {
  char_id: number;
  name: string;
  img: string;
  portrayed: string;
  details: Array<DetailsType>;
  open: boolean;
  close: () => void;
}

export function ModalCharacter(props: ModalCharacterPropsType) {
  const [openDetails, setOpenDetails] = useState(false);

  const handleOpen = () => setOpenDetails(true);
  const handleClose = () => setOpenDetails(false);

  return (
    <>
      <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby="modal-character"
        aria-describedby="modal character informations"
      >
        <ModalCardStyle sx={{ maxWidth: 345 }}>
          <CardMedia component="img" image={props.img} alt={props.name} />
          <CardContentStyle>
            <Typography gutterBottom variant="h5" component="h3">
              {props.name}
            </Typography>
            <Typography variant="body2">
              Representado por <span>{props.portrayed}</span>
            </Typography>
          </CardContentStyle>
          <ButtonDetailsStyle>
            {props.details.length ? (
              <ButtonDetails variant="contained" onClick={handleOpen}>
                {props.details.length} episódio(s)
              </ButtonDetails>
            ) : null}
          </ButtonDetailsStyle>
        </ModalCardStyle>
      </Modal>

      <ModalDetails
        name={props.name}
        img={props.img}
        portrayed={props.portrayed}
        details={props.details}
        openDetails={openDetails}
        closeDetails={handleClose}
      />
    </>
  );
}
