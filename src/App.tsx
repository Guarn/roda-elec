import React, { useEffect, useState } from "react";
import Graph from "./Components/Graph";
import * as S from "./Styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormBureau from "./Components/FormBureau";
import { bureaux, bureau1, bureau2, bureau3 } from "../src/firebase";
import { useHistory } from "react-router-dom";

function App() {
  const router = useHistory();
  const [resultats1, setResultats1] = useState({
    serrus: 0,
    postiaux: 0
  });
  const [resultats2, setResultats2] = useState({
    serrus: 0,
    postiaux: 0
  });
  const [resultats3, setResultats3] = useState({
    serrus: 0,
    postiaux: 0
  });
  const [B1, setB1] = useState<any>([]);
  const [B2, setB2] = useState<any>([]);
  const [B3, setB3] = useState<any>([]);

  useEffect(() => {
    bureaux.on("value", val => {
      if (!val.val()) {
        let payload = {
          serrus: 0,
          postiaux: 0,
          init: true,
          visible: true
        };
        bureau1.push(payload);
        bureau2.push(payload);
        bureau3.push(payload);
        setTimeout(() => {}, 2000);
      } else if (val.val() && val.val().length > 1) {
        val.val().map((el: any, index: number) => {
          if (index === 1) {
            let objectName = Object.keys(el);
            let countSerrus = 0;
            let countPostiaux = 0;
            let lB: any = [];
            objectName.map(el2 => {
              if (!el[el2].init) {
                lB = [...lB, { ...el[el2], id: el2 }];
              }
              if (el[el2].visible) {
                countSerrus += el[el2].serrus;
                countPostiaux += el[el2].postiaux;
              }
              return null;
            });
            setResultats1({
              serrus: countSerrus,
              postiaux: countPostiaux
            });
            setB1(lB.reverse());
          }
          if (index === 2) {
            let objectName = Object.keys(el);
            let countSerrus = 0;
            let countPostiaux = 0;
            let lB: any = [];
            objectName.map(el2 => {
              if (!el[el2].init) {
                lB = [...lB, { ...el[el2], id: el2 }];
              }
              if (el[el2].visible) {
                countSerrus += el[el2].serrus;
                countPostiaux += el[el2].postiaux;
              }
              return null;
            });
            setResultats2({
              serrus: countSerrus,
              postiaux: countPostiaux
            });
            setB2(lB.reverse());
          }
          if (index === 3) {
            let objectName = Object.keys(el);
            let countSerrus = 0;
            let countPostiaux = 0;
            let lB: any = [];
            objectName.map(el2 => {
              if (!el[el2].init) {
                lB = [...lB, { ...el[el2], id: el2 }];
              }
              if (el[el2].visible) {
                countSerrus += el[el2].serrus;
                countPostiaux += el[el2].postiaux;
              }
              return null;
            });
            setResultats3({
              serrus: countSerrus,
              postiaux: countPostiaux
            });
            setB3(lB.reverse());
          }
          return null;
        });
      }
    });
  }, []);

  const getTotal = () => ({
    serrus: resultats1.serrus + resultats2.serrus + resultats3.serrus,
    postiaux: resultats1.postiaux + resultats2.postiaux + resultats3.postiaux
  });

  return (
    <S.ConteneurGlobal>
      <Switch>
        <Route exact path="/">
          <S.TitreCtn>
            <S.Titre>Elections municipales</S.Titre>
            <S.SousTitre>La Roque d'Anthéron</S.SousTitre>
          </S.TitreCtn>

          <Graph resultats={getTotal()} />
          <S.DetailCtn>
            <S.DetailBureau
              onClick={() => {
                router.push("/Bureau1");
              }}
            >
              <Graph resultats={resultats1} mini />
              <S.NomBureau>Bureau 1</S.NomBureau>
              <S.DescBureau>Hôtel de ville</S.DescBureau>
            </S.DetailBureau>
            <S.DetailBureau
              onClick={() => {
                router.push("/Bureau2");
              }}
            >
              <Graph resultats={resultats2} mini />
              <S.NomBureau>Bureau 2</S.NomBureau>
              <S.DescBureau>Salle Anglade</S.DescBureau>
            </S.DetailBureau>
            <S.DetailBureau
              onClick={() => {
                router.push("/Bureau3");
              }}
            >
              <Graph resultats={resultats3} mini />
              <S.NomBureau>Bureau 3</S.NomBureau>
              <S.DescBureau>Office de tourisme</S.DescBureau>
            </S.DetailBureau>
          </S.DetailCtn>
        </Route>
        <Route path="/Bureau1">
          <FormBureau listeOp={B1} numBureau={1} />
        </Route>
        <Route path="/Bureau2">
          <FormBureau listeOp={B2} numBureau={2} />
        </Route>
        <Route path="/Bureau3">
          <FormBureau listeOp={B3} numBureau={3} />
        </Route>
        <Route path="/Raz">
          <button onClick={() => bureaux.remove()}>Reset</button>
        </Route>
      </Switch>
    </S.ConteneurGlobal>
  );
}

export default App;
