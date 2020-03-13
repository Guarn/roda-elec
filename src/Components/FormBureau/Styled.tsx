import styled from "styled-components";
import React from "react";
import { useHistory } from "react-router-dom";

export const FormBureauCtn = styled.div`
  width: 100%;
  color: #e6e6e6;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitreCtn = styled.div``;

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
  width: calc(100% - 20px);
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
`;
export const BtnEnvoi = styled.button`
  margin-bottom: 10px;
  border: 1px solid #888888;
  background-color: transparent;
  box-shadow: 3px 0px 6px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  color: #e6e6e6;
  width: 70%;
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

export const HeadCtn = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;

export const IconBack = () => {
  const router = useHistory();
  return (
    <svg
      style={{
        height: "50px",
        width: "50px",
        fill: "#e6e6e6",
        margin: "10px",
        marginRight: "30px",
        marginLeft: "30px"
      }}
      x="0px"
      y="0px"
      viewBox="0 0 492 492"
      onClick={() => router.push("/")}
    >
      <path
        d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
       c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
       L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
       c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
       c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
       C492,219.198,479.172,207.418,464.344,207.418z"
      />
    </svg>
  );
};

export const BlocNouveauPaquet = styled.div`
  width: 80%;
  display: flex;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #8a8a8a;
`;

export const TexteNewPaquet = styled.div`
  width: calc(100% - 57px);
  text-align: center;
  line-height: 57px;
  font-size: 20px;
`;

export const FakeButton = styled.div`
  height: 57px;
  width: 57px;
  z-index: 100;
  border-radius: 10px;
  box-shadow: 3px 0px 6px rgba(0, 0, 0, 0.16);
  background: linear-gradient(90deg, #e9e9e9, #bcbcbc);
`;

interface BlocFormulaireI {
  isVisible: "init" | "open" | "close";
}
export const BlocFormulaire = styled.div<BlocFormulaireI>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 0px;
  overflow: hidden;
  margin-bottom: 20px;
  animation: ${props => {
      switch (props.isVisible) {
        case "init":
          return "none";
        case "open":
          return "ouverture";
        case "close":
          return "fermeture";
      }
    }}
    300ms ease-in-out forwards;
  @keyframes ouverture {
    0% {
      height: 0px;
    }
    100% {
      height: 250px;
    }
  }
  @keyframes fermeture {
    0% {
      height: 250px;
    }
    100% {
      height: 0px;
    }
  }
`;

export const Formulaire = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const BlocSerrus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #9dcafe;
`;

export const BlocPostiaux = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #9dfec7;
  font-size: 24px;
`;

export const Vertical = styled.div`
  width: 3px;
  height: 70px;
  margin-left: 40px;
  margin-right: 40px;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const InputCandidat = styled.input`
  margin-top: 10px;
  width: 65px;
  height: 24px;
  border-radius: 30px;
  border-style: none;
  padding-left: 10px;
  font-size: 20px;
`;

export const BlocHistorique = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitreHistorique = styled.div`
  color: #e6e6e6;
  font-size: 30px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.7);
`;
interface SerrusNomI {
  visible: boolean;
}
export const ListeHistorique = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ListeHistoriqueBis = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HistoCtn = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Horizontal = styled.div`
  width: 80%;
  height: 2px;
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const Temps = styled.div<SerrusNomI>`
  flex: 1;
  color: ${props => (props.visible ? "#fe9d9d" : "rgba(255,255,255,0.4)")};
  font-size: 16px;
  text-align: center;
`;

export const ResultCtn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostiauxChiffre = styled.div<SerrusNomI>`
  font-weight: bold;
  font-size: 24px;
  color: ${props => (props.visible ? "#9dcafe" : "rgba(255,255,255,0.4)")};
`;

export const PostiauxNom = styled.div<SerrusNomI>`
  font-size: 20px;
  color: ${props => (props.visible ? "#9dcafe" : "rgba(255,255,255,0.4)")};
`;

export const SerrusChiffre = styled.div<SerrusNomI>`
  font-weight: bold;
  font-size: 24px;
  color: ${props => (props.visible ? "#9dfec7" : "rgba(255,255,255,0.4)")};
`;

export const SerrusNom = styled.div<SerrusNomI>`
  font-size: 20px;
  color: ${props => (props.visible ? "#9dfec7" : "rgba(255,255,255,0.4)")};
`;

export const IconCtn = styled.div<SerrusNomI>`
  height: 50px;
  width: 50px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  display: flex;
  border-radius: 12px;
  background: ${props =>
    props.visible
      ? "linear-gradient(45deg, #ffc9c9, #ff7a7a)"
      : "rgba(255,255,255,0.4)"};
  justify-content: center;
  align-items: center;
`;

interface IconBinI {
  onClick: () => void;
  visible: boolean;
}

export const IconBin = ({ onClick, visible }: IconBinI) => {
  return (
    <div
      onClick={() => onClick()}
      style={{
        flex: "1",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <IconCtn visible={visible}>
        <svg
          style={{
            height: "25px",
            width: "25px",
            fill: visible ? "#e6e6e6" : "white"
          }}
          x="0px"
          y="0px"
          viewBox="0 0 350 420"
        >
          {visible && (
            <>
              <path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
              <path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
              <path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0" />
              <path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
            </>
          )}
          {!visible && (
            <>
              <path
                d="M203.3,395.1c-98.5,0-178.4-79.8-178.4-178.3c0-47.3,18.8-92.7,52.2-126.1C140.5,27.3,241,20.8,312,75.4
	c30.5,23.5,52.6,56.3,63.1,93.4c2.8,9.8-2.9,20-12.7,22.8c-9.8,2.8-20-2.9-22.8-12.7c0-0.1,0-0.1-0.1-0.2c-8.3-29.4-25.8-55.4-50-74
	c-24.7-19.1-55-29.4-86.2-29.3c-78,0-141.5,63.5-141.5,141.5s63.5,141.5,141.5,141.5c31.2,0.1,61.6-10.2,86.2-29.3
	c24.2-18.7,41.7-44.6,50-74c2.7-9.8,12.8-15.6,22.7-12.9c9.8,2.7,15.6,12.8,12.9,22.7c0,0.1,0,0.1-0.1,0.2
	c-10.5,37.1-32.6,69.8-63.1,93.4C280.9,382.3,242.6,395.3,203.3,395.1L203.3,395.1z"
              />
              <path
                d="M375.5,210.6c-1.8,0-3.5-0.3-5.2-0.8l-104.5-30.8c-9.8-2.8-15.5-13-12.7-22.8c2.8-9.8,13-15.5,22.8-12.7
	c0.1,0,0.2,0.1,0.3,0.1l82.2,24.2l4.9-87.5c0.5-10.2,9.1-18,19.3-17.6c10.2,0.5,18,9.1,17.6,19.3c0,0.1,0,0.2,0,0.3l-6.2,110.7
	C393.3,203,385.3,210.6,375.5,210.6L375.5,210.6z"
              />
            </>
          )}
        </svg>
      </IconCtn>
    </div>
  );
};
