import styled from "styled-components";

export const ConteneurGlobal = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const TitreCtn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 10%;
  margin-top: 10px;
  color: #ececec;
`;

export const Titre = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-left: 20%;
`;

export const SousTitre = styled.div`
  font-size: 20px;
  padding-left: 20%;
  font-style: italic;
`;

export const DetailCtn = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-bottom: 20px;
`;

export const DetailBureau = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const NomBureau = styled.div`
  width: 100%;
  text-align: center;
  color: #ececec;
`;
