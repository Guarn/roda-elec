import styled from "styled-components";

export const FormBureauCtn = styled.div`
  height: 100%;
  width: 100%;
  color: #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TitreCtn = styled.div`
  margin-top: 20px;
`;

export const Titre = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const SousTitre = styled.div`
  font-size: 25px;
  font-style: italic;
`;

export const TableCtn = styled.div`
  width: 100%;
`;
export const TitreNumero = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`;
export const NumeroTableCtn = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

interface TableI {
  isSelected: boolean;
}

export const Table = styled.div<TableI>`
  height: 50px;
  width: 50px;
  border: 1px solid ${props => (props.isSelected ? "white" : "#888888")};
  background-color: ${props => (props.isSelected ? "#888888" : "transparent")};
  font-size: 30px;
  text-align: center;
  line-height: 50px;
  transition: all 200ms;
`;
export const BlocCandidat = styled.div`
  display: flex;
  width: 90%;
  font-size: 25px;
`;
export const NomCandidat = styled.div`
  width: 50%;
`;
export const InputNom = styled.input`
  width: 50%;
  font: 400 20px Arial;
`;
export const Notice = styled.div`
  font-style: italic;
  margin-left: 10px;
  margin-right: 10px;
`;
export const BtnEnvoi = styled.button`
  margin-bottom: 10px;
  border: 1px solid #888888;
  background-color: transparent;
  color: #e6e6e6;
  width: 90%;
  height: 40px;
  font-size: 25px;
`;

export const ConfirmCtn = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 60px;
`;

export const Recap = styled.div``;

export const TitreRecap = styled.div`
  font-size: 25px;
  font-weight: bold;
  border-bottom: 2px solid #e6e6e6;
  margin-bottom: 10px;
`;

export const RecapButton = styled.button`
  border: 2px solid #e6e6e6;
  background-color: rgba(255, 255, 255, 0.05);
  color: #e6e6e6;
  height: 50px;
  font-size: 20px;
  margin-top: 30px;
`;
export const RecapAnnul = styled.button`
  border: 1px solid grey;
  background-color: rgba(255, 255, 255, 0.05);
  color: #e6e6e6;
  height: 30px;
  font-size: 16px;
  margin-bottom: 50px;
  width: 100px;
`;
