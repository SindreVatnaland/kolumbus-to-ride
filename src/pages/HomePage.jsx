import React from "react";
import styled from "styled-components";
import Hand from "../components/hand";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: red;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
`;
const HorizontalWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: blue;
  max-height: 60%;
  gap: 1rem;
`;

const LocationList = styled.div`
  position: relative;
  width: 60%;
  height: 100%;
  background: yellow;
`;
const ScoreWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
`;

const Score = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  background: green;
`;

const FrameWrapper = styled.iframe`
  width: 100%;
  height: 150%;
  transform: scale(0.4);
`;

export const HomePage = (props) => {
  return (
    <Wrapper>
      <HorizontalWrapper>
        <LocationList>
        </LocationList>
        <ScoreWrapper>
          <Score>
          <h1>Totalt tid brukt er: 10:30</h1>
          </Score>
          <Score>
            <h2>Du er på holdeplass: </h2>
            <h2>Madla</h2>
          </Score>
        </ScoreWrapper>
      </HorizontalWrapper>
      <HorizontalWrapper>
        <Hand />
      </HorizontalWrapper>
    </Wrapper>
  );
};
