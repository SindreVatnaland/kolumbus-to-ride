import React, { useState } from "react";
import styled from "styled-components";
import Hand from "../components/hand";
import TransportationList from "../components/transportationList/transportationList";
import { startGame } from "../utils/api";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  background: #171717;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
`;
const HorizontalWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  max-width: 100%;
  gap: 1rem;
`;

const MainContentWrapper = styled.div`
  position: relative;
  width: 60%;
  height: 100%;
  border-radius: 20px;
  background-color: #444444;
  padding: 1rem;
  box-sizing: border-box;
`;

const RightWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
`;

const IframeWrapper = styled.iframe`
  height: 100%;
  width: 100%;
`;

const listOfBusses = [
  { bussNumber: "3", bussName: "Forus", timeAway: "Now", id: 2344 },
  { bussNumber: "101", bussName: "Tau", timeAway: "1 min", id: 2344 },
  { bussNumber: "X30", bussName: "Stavanger", timeAway: "5 min", id: 2229 },
  { bussNumber: "3", bussName: "Forus", timeAway: "6 min", id: 2229 },
  { bussNumber: "3", bussName: "Forus", timeAway: "Now", id: 2229 },
  { bussNumber: "101", bussName: "Tau", timeAway: "1 min", id: 2229 },
  { bussNumber: "X30", bussName: "Stavanger", timeAway: "5 min", id: 2229 },
  { bussNumber: "3", bussName: "Forus", timeAway: "6 min", id: 2229 },
  { bussNumber: "3", bussName: "Forus", timeAway: "Now", id: 2229 },
  { bussNumber: "101", bussName: "Tau", timeAway: "1 min", id: 2229 },
  { bussNumber: "X30", bussName: "Stavanger", timeAway: "5 min", id: 2229 },
  { bussNumber: "3", bussName: "Forus", timeAway: "6 min", id: 2229 },
];

export const HomePage = (props) => {
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedVehicle, setSelectedVehicle] = useState(undefined);
  const [state, setState] = useState({});

  async function playCard(cardId) {
    await post(`/make-move/${cardId}`);
    await getState();
  }

  // async function start() {
  //   startGame();
  // }

  // start();

  return (
    <Wrapper>
      <HorizontalWrapper>
        <MainContentWrapper>
          <IframeWrapper
            src={`https://kart.kolumbus.no/${
              selectedVehicle ? `?p=${selectedVehicle}` : ""
            }`}
            frameborder="0"
          ></IframeWrapper>
        </MainContentWrapper>
        <RightWrapper>
          <h3 style={{ color: "white" }}>Du er på holdeplass: Madla</h3>
          <TransportationList
            options={listOfBusses}
            onClick={(id) => setSelectedVehicle(id)}
          />
          <Hand setSelectedCard={setSelectedCard} />
          <button
            disabled={!(selectedVehicle || selectedCard)}
            onClick={() => null}
          >
            MOVE
          </button>
        </RightWrapper>
      </HorizontalWrapper>
    </Wrapper>
  );
};
