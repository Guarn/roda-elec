import React, { useState } from "react";
import * as S from "./Styled";
import { Link, BrowserRouter as Router, useHistory } from "react-router-dom";

export interface MenuI {}

const Menu: React.FC<MenuI> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useHistory();
  return (
    <>
      <S.IconeMenu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <S.Barre />
        <S.Barre />
        <S.Barre />
      </S.IconeMenu>
      {isOpen && (
        <S.MenuCtn isOpen={isOpen}>
          <S.LiensCtn>
            <S.LienTitre
              onClick={() => {
                setIsOpen(false);
                router.push("/");
              }}
            >
              Résultats
            </S.LienTitre>
            <S.LienCtn
              onClick={() => {
                setIsOpen(false);
                router.push("/Bureau1");
              }}
            >
              <S.LienBureau>Bureau 1</S.LienBureau>
              <S.LienSousTitre>Hôtel de ville</S.LienSousTitre>
            </S.LienCtn>
            <S.LienCtn
              onClick={() => {
                setIsOpen(false);
                router.push("/Bureau2");
              }}
            >
              <S.LienBureau>Bureau 2</S.LienBureau>
              <S.LienSousTitre>Salle Anglade</S.LienSousTitre>
            </S.LienCtn>
            <S.LienCtn
              onClick={() => {
                setIsOpen(false);
                router.push("/Bureau3");
              }}
            >
              <S.LienBureau>Bureau 3</S.LienBureau>
              <S.LienSousTitre>Office de tourisme</S.LienSousTitre>
            </S.LienCtn>
          </S.LiensCtn>
        </S.MenuCtn>
      )}
    </>
  );
};
export default Menu;
