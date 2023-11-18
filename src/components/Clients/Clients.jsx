import { clients } from "../../constants";
import { ImageDiv, StyledDiv, StyledImg, StyledSection } from "./style";

const Clients = () => {
  return (
    <StyledSection>
      <StyledDiv>
        {clients.map((client) => (
          <ImageDiv key={client.id}>
            <StyledImg src={client.logo} alt="clinet" />
          </ImageDiv>
        ))}
      </StyledDiv>
    </StyledSection>
  );
};

export default Clients;
