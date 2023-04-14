import styled from "styled-components";

const ListButton = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  width: 100%;
  cursor:pointer;
`
  
const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  gap: 1rem;
`;

const NumberElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  width: 4rem;
  height: 2rem;
`;

const TransportationItem = ({bussNumber, bussName, timeAway, id, onClick}) => {
  return (
    <ListButton onClick={() => onClick(id)}>
      <NameWrapper>
        <NumberElement>{bussNumber}</NumberElement>
        <p>{bussName}</p>
      </NameWrapper>
      <p>{timeAway}</p>
    </ListButton>
  );
}

export default TransportationItem;