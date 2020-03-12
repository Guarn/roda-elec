import styled from "styled-components";

export const GraphCtn = styled.div`
  flex: 2;
  height: 90%;
  width: 90%;
  display: flex;
  align-items: flex-end;
  border-bottom: 2px solid lightgray;
`;

export const ListeCtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  height: 100%;
  position: relative;
`;

export interface VerticalBarI {
  height: number;
  bgColor: string;
  candidat: string;
}
export const VerticalBar = styled.div<VerticalBarI>`
  height: ${props => props.height + "%"};
  background-color: ${props => props.bgColor};
  transition: all 500ms ease-out;
  width: 60%;
  margin-left: 20%;
`;

export const Nom = styled.div`
  position: absolute;
  bottom: -25px;
  width: 100%;
  text-align: center;
  color: #ececec;
`;

export const NombreVotes = styled.div`
  position: relative;
  top: -25px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  color: #ececec;
`;

export const PercentVotes = styled.div`
  position: relative;
  top: calc(50% - 21px);
  font-weight: bold;
  text-align: center;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
