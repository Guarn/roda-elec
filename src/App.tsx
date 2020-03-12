import React, { useEffect, useState } from "react";
import Graph from "./Components/Graph";
import * as S from "./Styled";
import Menu from "./Components/Menu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormBureau from "./Components/FormBureau";
import { bureaux, bureau1, bureau2, bureau3 } from "../src/firebase";

function App() {
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
  useEffect(() => {
    bureaux.on("value", val => {
      if (!val.val()) {
        let payload = {
          table: 0,
          serrus: 0,
          postiaux: 0
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
            objectName.map(el2 => {
              countSerrus += el[el2].serrus;
              countPostiaux += el[el2].postiaux;
            });
            setResultats1(c => ({
              serrus: countSerrus,
              postiaux: countPostiaux
            }));
          }
          if (index === 2) {
            let objectName = Object.keys(el);
            let countSerrus = 0;
            let countPostiaux = 0;
            objectName.map(el2 => {
              countSerrus += el[el2].serrus;
              countPostiaux += el[el2].postiaux;
            });
            setResultats2(c => ({
              serrus: countSerrus,
              postiaux: countPostiaux
            }));
          }
          if (index === 3) {
            let objectName = Object.keys(el);
            let countSerrus = 0;
            let countPostiaux = 0;
            objectName.map(el2 => {
              countSerrus += el[el2].serrus;
              countPostiaux += el[el2].postiaux;
            });
            setResultats3(c => ({
              serrus: countSerrus,
              postiaux: countPostiaux
            }));
          }
        });
      }
    });
  }, []);

  const getTotal = () => ({
    serrus: resultats1.serrus + resultats2.serrus + resultats3.serrus,
    postiaux: resultats1.postiaux + resultats2.postiaux + resultats3.postiaux
  });

  return (
    <Router>
      <S.ConteneurGlobal>
        <Menu />
        <Switch>
          <Route exact path="/">
            <S.TitreCtn>
              <S.Titre>Elections municipales</S.Titre>
              <S.SousTitre>La Roque d'Anthéron</S.SousTitre>
            </S.TitreCtn>

            <Graph resultats={getTotal()} />
            <S.DetailCtn>
              <S.DetailBureau>
                <Graph resultats={resultats1} mini />
                <S.NomBureau>Bureau 1</S.NomBureau>
              </S.DetailBureau>
              <S.DetailBureau>
                <Graph resultats={resultats2} mini />
                <S.NomBureau>Bureau 2</S.NomBureau>
              </S.DetailBureau>
              <S.DetailBureau>
                <Graph resultats={resultats3} mini />
                <S.NomBureau>Bureau 3</S.NomBureau>
              </S.DetailBureau>
            </S.DetailCtn>
          </Route>
          <Route path="/Bureau1">
            <FormBureau numBureau={1} />
          </Route>
          <Route path="/Bureau2">
            <FormBureau numBureau={2} />
          </Route>
          <Route path="/Bureau3">
            <FormBureau numBureau={3} />
          </Route>
        </Switch>
      </S.ConteneurGlobal>
    </Router>
  );
}

export default App;
