import { card } from "../../assets";
import Button from "../Button";
import {
  ImageDiv,
  StyledHeading,
  StyledImg,
  StyledParagraph,
  StyledSection,
  TextDiv,
} from "./style";

const CardDeal = () => {
  return (
    <StyledSection>
      <TextDiv>
        <StyledHeading>
          Find a better card deal <br className="hidden sm:block" /> in few easy
          steps.
        </StyledHeading>
        <StyledParagraph>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </StyledParagraph>
        <Button />
      </TextDiv>

      <ImageDiv>
        <StyledImg src={card} alt="card" />
      </ImageDiv>
    </StyledSection>
  );
};

export default CardDeal;
