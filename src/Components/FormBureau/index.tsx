import React, { useState, useRef } from "react";
import * as S from "./Styled";
import { bureau1, bureau2, bureau3 } from "../../firebase";
import { useHistory } from "react-router-dom";

export interface FormBureauI {
  numBureau: number;
  listeOp: any;
}

const FormBureau: React.FC<FormBureauI> = ({ numBureau, listeOp }) => {
  const [voteSerrus, setVoteSerrus] = useState<number | null>(null);
  const [votePostiaux, setVotePostiaux] = useState<number | null>(null);
  const [confirm, setConfirm] = useState<"init" | "open" | "close">("init");
  const router = useHistory();
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const sendData = () => {
    if (
      voteSerrus !== null &&
      voteSerrus >= 0 &&
      votePostiaux !== null &&
      votePostiaux >= 0
    ) {
      let payload = {
        serrus: voteSerrus,
        postiaux: votePostiaux,
        init: false,
        visible: true,
        time: Date.now()
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
      setConfirm("close");
    }
  };

  const handleOpen = () => {
    switch (confirm) {
      case "init":
        setConfirm("open");
        break;
      case "open":
        setConfirm("close");
        break;
      case "close":
        setConfirm("open");
        break;
    }
  };

  const getTime = (a: number) => {
    let t = Math.floor((Date.now() - a) / 1000);
    if (t > 60) {
      return Math.floor((Date.now() - a) / 1000 / 60) + "m";
    } else {
      return t + "s";
    }
  };

  const toggle = (el: any) => {
    let newEl = { ...el, visible: !el.visible };
    switch (numBureau) {
      case 1:
        bureau1.child(el.id).update(newEl);
        break;
      case 2:
        bureau2.child(el.id).update(newEl);

        break;
      case 3:
        bureau3.child(el.id).update(newEl);

        break;
    }
  };

  return (
    <S.FormBureauCtn>
      <>
        <S.HeadCtn>
          <S.IconBack />
          <S.TitreCtn>
            <S.Titre>Bureau {numBureau}</S.Titre>
            <S.SousTitre>{bureaux[numBureau]}</S.SousTitre>
          </S.TitreCtn>
        </S.HeadCtn>
        <S.BlocNouveauPaquet onClick={handleOpen}>
          <S.FakeButton />
          <S.TexteNewPaquet>Ajouter un paquet</S.TexteNewPaquet>
        </S.BlocNouveauPaquet>
        <S.BlocFormulaire isVisible={confirm}>
          <S.Notice>
            Le formulaire n'est validé que si les deux candidats ont un chiffre
            supérieur ou égal à 0.
          </S.Notice>
          <S.Formulaire>
            <S.BlocSerrus>
              Postiaux
              <S.InputCandidat
                ref={ref1}
                type="number"
                onChange={e => setVotePostiaux(parseInt(e.target.value))}
              />
            </S.BlocSerrus>
            <S.Vertical />
            <S.BlocPostiaux>
              Serrus
              <S.InputCandidat
                ref={ref2}
                type="number"
                onChange={e => setVoteSerrus(parseInt(e.target.value))}
              />
            </S.BlocPostiaux>
          </S.Formulaire>

          <S.BtnEnvoi onClick={sendData}>Confirmer</S.BtnEnvoi>
        </S.BlocFormulaire>
        <S.BlocHistorique>
          <S.TitreHistorique>Historique</S.TitreHistorique>
        </S.BlocHistorique>
        <S.ListeHistorique>
          {listeOp.map((el: any, index: number) => {
            console.log(el);

            return (
              <S.ListeHistoriqueBis key={`Histo${index}`}>
                <S.HistoCtn>
                  <S.Temps visible={el.visible}>{getTime(el.time)}</S.Temps>
                  <S.ResultCtn>
                    <S.PostiauxChiffre visible={el.visible}>
                      {el.postiaux}
                    </S.PostiauxChiffre>
                    <S.PostiauxNom visible={el.visible}>Postiaux</S.PostiauxNom>
                  </S.ResultCtn>
                  <S.ResultCtn>
                    <S.SerrusChiffre visible={el.visible}>
                      {el.serrus}
                    </S.SerrusChiffre>
                    <S.SerrusNom visible={el.visible}>Serrus</S.SerrusNom>
                  </S.ResultCtn>
                  <S.IconBin onClick={() => toggle(el)} visible={el.visible} />
                </S.HistoCtn>
                <S.Horizontal />
              </S.ListeHistoriqueBis>
            );
          })}
        </S.ListeHistorique>
      </>
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
