import Button from "../Button";
import { ButtonDiv, StyledHeading, StyledParagraph, StyledSection, TextDiv } from "./style";

const CTA = () => {
  return (
    <StyledSection>
      <TextDiv>
        <StyledHeading>
          Let&apos;s try our service now!
        </StyledHeading>
        <StyledParagraph>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </StyledParagraph>
      </TextDiv>

      <ButtonDiv>
        <Button />
      </ButtonDiv>
    </StyledSection>
  );
};

export default CTA;
