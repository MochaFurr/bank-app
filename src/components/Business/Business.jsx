import PropTypes from "prop-types";
import { features } from "../../constants/";
import Button from "../Button";
import {
  Card,
  CardContainer,
  CardHeading,
  CardText,
  FeaturesDiv,
  StyledBr,
  StyledDiv,
  StyledHeading,
  StyledImg,
  StyledParagraph,
  StyledSection,
  TextContainer,
} from "./style";

const FeatureCard = ({ icon, title, content, index }) => (
  <CardContainer
    className={`${index !== features.length - 1 ? "mn-6" : "mb-0"}`}
  >
    <Card>
      <StyledImg src={icon} alt="icon" />
    </Card>
    <TextContainer>
      <CardHeading>{title}</CardHeading>
      <CardText>{content}</CardText>
    </TextContainer>
  </CardContainer>
);

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

        <Button />
      </StyledDiv>

      <FeaturesDiv>
        {features.map((feature, index) => (
          <FeatureCard key={features.id} {...feature} index={index} />
        ))}
      </FeaturesDiv>
    </StyledSection>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  index: PropTypes.number,
};

export default Business;
