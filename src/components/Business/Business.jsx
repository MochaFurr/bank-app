import { features } from "../../constants";
import Button from "../Button";
import { StyledBr, StyledDiv, StyledHeading, StyledParagraph, StyledSection } from "./style";

const Business = () => {
  return (
    <StyledSection id={features}>
      <StyledDiv>
        <StyledHeading>
          You do the business, <StyledBr /> we&apos;ll handle the money
        </StyledHeading>
        <StyledParagraph>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </StyledParagraph>

        <Button styles="mt-10"/>
      </StyledDiv>
    </StyledSection>
  );
};

export default Business;

