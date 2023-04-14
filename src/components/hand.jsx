import { useState } from "react";
import styled from "styled-components";
import { get, post } from "../utils/api"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const Card = styled.div`
  position: relative;
  width: 2.5rem;
  height: 5rem;
  padding: 2em;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  overflow: visible;
  &:hover {
    cursor: pointer;
    scale:1.1;
    z-index:9999;
  }
`
const CardWrapper = styled.div`
  position: relative;
  width: 1rem;
  transition: width 0.5s;
  &:hover:not(:last-child)  {
    width: 6rem;
  }
`;

const Hand = ({setSelectedHand}) => {
  const [cards, setCards] = useState([{}, {}, {}, {}, {}]);

  async function updateState() {
    const state = await get("/state")
    setCards(state.hand)
    // Filter state get remaining cards
  }

  updateState()

  return (
    <Container>
      {
        cards.map(card => 
          <CardWrapper>

          <Card imageUrl="https://deckofcardsapi.com/static/img/6H.png" alt="" onClick={() => {setSelectedHand(card?.id ?? 0)}} />
          </CardWrapper>
        )
      }
    </Container>
  );
};

export default Hand;
