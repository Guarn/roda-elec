import React from "react";
import * as S from "./Styled";

export interface ListeI {
  candidat: string;
  votes: number;
  total: number;
  bgColor: string;
  mini: boolean;
}

const Liste: React.FC<ListeI> = ({ candidat, votes, total, bgColor, mini }) => {
  return (
    <S.ListeCtn>
      <S.VerticalBar
        height={getPercent(votes, total)}
        bgColor={bgColor}
        candidat={candidat}
      >
        {!mini && <S.NombreVotes>{votes}</S.NombreVotes>}
        {!mini && (
          <S.PercentVotes>
            {getPercent(votes, total) > 10 &&
              getPercent(votes, total).toString() + "%"}
          </S.PercentVotes>
        )}
      </S.VerticalBar>
      {!mini && <S.Nom>{candidat}</S.Nom>}
    </S.ListeCtn>
  );
};
export default Liste;

const getPercent = (votes: number, total: number) => {
  if (total !== 0) {
    return Math.round((100 * votes) / total);
  } else {
    return 0;
  }
};
