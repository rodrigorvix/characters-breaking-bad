import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";

import styles from "./styles.module.scss";

interface DetailsType {
  title:string,
  season:string,
  air_date:string,
  characters:Array<string>,
  episode:string,
}

interface ModalDetailsPropsType {
  name:string,
  img:string,
  portrayed:string,
  details:Array<DetailsType>,
  openDetails:boolean,
  closeDetails:()=> void, 
}
export function ModalDetails(props:ModalDetailsPropsType) {

  return(
    <Modal
        open={props.openDetails}
        onClose={props.closeDetails}
        aria-labelledby="modal-character-details"
        aria-describedby="modal character details episodies"
      >
          <Card className={styles.modalDetails} sx={{ maxWidth: 500 }}>
            <div className={styles.characterDetails}>
              <img src={props.img} alt={props.name} />
              <div>
                <p>{props.name}</p>
                <p>Representado por <span>{props.portrayed}</span></p>

                {props.details.length ? 
                   <p>{props.details.length} episódio(s)</p>
                   :
                   null
                }
               
              </div>
            </div>

            <ul className={styles.listEpisodes}>
              {props.details.length > 0 && 
                props.details.map(detail => {
                  return(
                    <li key={detail.title}>
                      <span> Episódio: {detail.title}</span>
                      <span>#{detail.season}.{detail.episode}</span>
                      <span> ({detail.air_date.slice(detail.air_date.length - 4)})</span>
                    </li>
                  );
                })
              }      
              </ul>  
          </Card>
      </Modal>

  );

}