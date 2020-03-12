import styled from "styled-components";

interface MenuCtnI {
  isOpen: boolean;
}

export const MenuCtn = styled.div<MenuCtnI>`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${props => (props.isOpen ? "#787878" : "transparent")};
  transform-origin: top left;
  transition: all 200ms ease-out;
  z-index: 150;
`;

export const IconeMenu = styled.div<MenuCtnI>`
  position: absolute;
  background-color: #a56565;
  top: -10px;
  left: -10px;
  display: flex;
  flex-direction: column;
  border-radius: ${props => (props.isOpen ? "0px" : "15px")};
  transform-origin: center;
  transform: ${props => (props.isOpen ? "rotate(0deg)" : "rotate(45deg) ")};
  padding: 20px;
  height: 25px;
  width: 25px;
  justify-content: space-between;
  transition: all 200ms ease-out;
  box-shadow: 3px 0px 8px rgba(0, 0, 0, 0.5);
  z-index: 160;
`;

export const Barre = styled.div`
  background-color: #e6e6e6;
  height: 3px;
  width: 29px;
`;

export const LiensCtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #e6e6e6;
  height: 100%;
`;

export const LienCtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LienTitre = styled.div`
  font-size: 35px;
  font-weight: bold;

  a {
    color: inherit;
    cursor: pointer;
  }
`;
export const LienBureau = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
export const LienSousTitre = styled.div`
  font-size: 25px;
  font-style: italic;
`;
