import React from "react";
import * as S from "./Styled";
import Liste from "./Liste";

export interface GraphI {
  resultats: { serrus: number; postiaux: number };

  mini?: boolean;
}

const Graph: React.FC<GraphI> = ({ resultats, mini = false }) => {
  const getTotalVotes = () => resultats.postiaux + resultats.serrus;
  return (
    <S.GraphCtn>
      <Liste
        candidat="Postiaux"
        votes={resultats.postiaux}
        total={getTotalVotes()}
        bgColor="#9DCAFE"
        mini={mini}
      />
      <Liste
        candidat="Serrus"
        votes={resultats.serrus}
        total={getTotalVotes()}
        bgColor="#9DFEC7"
        mini={mini}
      />
    </S.GraphCtn>
  );
};
export default Graph;
