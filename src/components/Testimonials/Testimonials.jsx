import { feedback } from "../../constants";
import FeedbackCard from "../FeedbackCard";
import {
  CardDiv,
  ParagraphDiv,
  StyledHeading,
  StyledParagraph,
  StyledSection,
  TextDiv,
} from "./style";

const Testimonials = () => {
  return (
    <StyledSection id="clients">
      {/* TO DO - gradient div */}
      <div />

      <TextDiv>
        <StyledHeading>
          What people are <br className="hidden sm:block" /> saying about us
        </StyledHeading>
        <ParagraphDiv>
          <StyledParagraph>
            Everything you need to accept card payments{" "}
            <br className="hidden sm:block" /> and grow your business anywhere
            on the planet.
          </StyledParagraph>
        </ParagraphDiv>
      </TextDiv>

      <CardDiv>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </CardDiv>
    </StyledSection>
  );
};

export default Testimonials;
