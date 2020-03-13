import styled from "styled-components";

export const ConteneurGlobal = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TitreCtn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 10px;
  color: #ececec;
`;

export const Titre = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

export const SousTitre = styled.div`
  font-size: 24px;
  text-align: center;
  font-style: italic;
`;

export const DetailCtn = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-bottom: 80px;
  padding-top: 20px;
`;

export const DetailBureau = styled.div`
  position: relative;
  display: flex;
  width: 25%;
  flex-direction: column;
  justify-content: flex-end;
`;

export const NomBureau = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: #ececec;
  position: absolute;
  bottom: -20px;
`;

export const DescBureau = styled.div`
  width: 100%;
  font-style: italic;
  color: #d1d1d1;
  position: absolute;
  bottom: -65px;
  text-align: center;
`;
