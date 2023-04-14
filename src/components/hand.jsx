import { useState } from "react";
import styled from "styled-components";

const Hand = (prop) => {
  const [cards, setCards] = useState([{}, {}, {}, {}, {}]);

  function getHand() {
    console.log("draw hand")
  }

  function playCard(cardId) {
    console.log(cardId)

    if (!cards.length) getHand();
  }
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const Card = styled.div`
  width: 3rem;
  height: 5rem;
  padding: 2em;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  z-index: 1000;
  overflow: visible;
`

  return (
    <Container>
      {
        cards.map(card => 
          <Card imageUrl="https://deckofcardsapi.com/static/img/6H.png" alt="" onClick={() => {playCard(card?.id ?? 0)}} />
        )
      }
    </Container>
  );
};

export default Hand;
