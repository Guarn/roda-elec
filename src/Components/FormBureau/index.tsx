import React, { useState, useEffect } from "react";
import * as S from "./Styled";
import { bureau1, bureau2, bureau3 } from "../../firebase";
import { useHistory } from "react-router-dom";

export interface FormBureauI {
  numBureau: number;
}

const FormBureau: React.FC<FormBureauI> = ({ numBureau }) => {
  const [numTable, setNumTable] = useState<number | null>(null);
  const [voteSerrus, setVoteSerrus] = useState<number | null>(null);
  const [votePostiaux, setVotePostiaux] = useState<number | null>(null);
  const [confirm, setConfirm] = useState(false);
  const router = useHistory();

  const sendData = () => {
    if (numTable && voteSerrus && setVotePostiaux) {
      let payload = {
        table: numTable,
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
      setNumTable(null);
      setVotePostiaux(null);
      setVoteSerrus(null);
      setConfirm(false);
      router.push("/");
    }
  };

  const verifForm = () => {
    if (numTable && voteSerrus && setVotePostiaux) {
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
          <S.TableCtn>
            <S.TitreNumero>Numéro de table</S.TitreNumero>
            <S.NumeroTableCtn>
              <S.Table
                onClick={() => setNumTable(1)}
                isSelected={numTable === 1}
              >
                1
              </S.Table>
              <S.Table
                onClick={() => setNumTable(2)}
                isSelected={numTable === 2}
              >
                2
              </S.Table>
              <S.Table
                onClick={() => setNumTable(3)}
                isSelected={numTable === 3}
              >
                3
              </S.Table>
              <S.Table
                onClick={() => setNumTable(4)}
                isSelected={numTable === 4}
              >
                4
              </S.Table>
            </S.NumeroTableCtn>
          </S.TableCtn>
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
          <S.RecapAnnul>Retour</S.RecapAnnul>
          <S.TitreRecap>Bureau {numBureau}</S.TitreRecap>
          <S.Recap>
            Table <b>{numTable}</b>
          </S.Recap>
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
