import TransportationItem from "./transportationItem"
import styled from "styled-components";

const StyledList = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const TransportationList = ({options, onClick}) => {
  return (
    <StyledList>
      {
        options.map((item) => (<TransportationItem key={item.id} onClick={onClick} {...item} />))
      }
    </StyledList>
  );
}

export default TransportationList;