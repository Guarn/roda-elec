import React, { useState } from "react";
import * as S from "./Styled";
import { bureau1, bureau2, bureau3 } from "../../firebase";
import { useHistory } from "react-router-dom";

export interface FormBureauI {
  numBureau: number;
}

const FormBureau: React.FC<FormBureauI> = ({ numBureau }) => {
  const [voteSerrus, setVoteSerrus] = useState<number | null>(null);
  const [votePostiaux, setVotePostiaux] = useState<number | null>(null);
  const [confirm, setConfirm] = useState(false);
  const router = useHistory();

  const sendData = () => {
    if (voteSerrus && setVotePostiaux) {
      let payload = {
        serrus: voteSerrus,
        postiaux: votePostiaux
      };
      switch (numBureau) {
        case 1:
          bureau1.push(payload);
          break;
        case 2:
          bureau2.push(payload);
          break;
        case 3:
          bureau3.push(payload);
          break;
      }
      setVotePostiaux(null);
      setVoteSerrus(null);
      setConfirm(false);
      router.push("/");
    }
  };
  const handleBack = () => {
    setConfirm(false);
  };

  const verifForm = () => {
    if (voteSerrus && setVotePostiaux) {
      setConfirm(true);
    }
  };
  return (
    <S.FormBureauCtn>
      {!confirm && (
        <>
          <S.TitreCtn>
            <S.Titre>Bureau {numBureau}</S.Titre>
            <S.SousTitre>{bureaux[numBureau]}</S.SousTitre>
          </S.TitreCtn>

          <S.BlocCandidat>
            <S.NomCandidat>Postiaux</S.NomCandidat>
            <S.InputNom
              onChange={e => setVotePostiaux(parseInt(e.target.value))}
              type="number"
            ></S.InputNom>
          </S.BlocCandidat>
          <S.BlocCandidat>
            <S.NomCandidat>Serrus</S.NomCandidat>
            <S.InputNom
              type="number"
              onChange={e => setVoteSerrus(parseInt(e.target.value))}
            ></S.InputNom>
          </S.BlocCandidat>
          <S.Notice>
            * N'envoyez les données que lorsqu'un paquet est définitivement
            validé.
          </S.Notice>
          <S.BtnEnvoi onClick={verifForm}>Envoyer les données</S.BtnEnvoi>
        </>
      )}
      {confirm && (
        <S.ConfirmCtn>
          <S.RecapAnnul onClick={handleBack}>Retour</S.RecapAnnul>
          <S.TitreRecap>Bureau {numBureau}</S.TitreRecap>

          <S.Recap>
            Postiaux : <b>{votePostiaux}</b> votes
          </S.Recap>
          <S.Recap>
            Serrus : <b>{voteSerrus}</b> votes
          </S.Recap>
          <S.RecapButton onClick={sendData}>Confirmer l'envoi</S.RecapButton>
        </S.ConfirmCtn>
      )}
    </S.FormBureauCtn>
  );
};
export default FormBureau;

const bureaux = [
  "null",
  "Hôtel de ville",
  "Salle Anglade",
  "Office de tourisme"
];
