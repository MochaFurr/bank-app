import PropTypes from "prop-types";
import styles, { layout } from "../../style";

export const StyledSection = ({
  children,
  className = "",
  customStyle = {},
}) => {
  return (
    <section className={`${layout.section} ${className}`} style={customStyle}>
      {children}
    </section>
  );
};

export const StyledDiv = ({ children, className = "", customStyle }) => {
  return (
    <div className={`${layout.info} ${className}`} style={customStyle}>
      {children}
    </div>
  );
};

export const StyledHeading = ({ children, className = "", customStyle }) => {
  return (
    <h2 className={`${styles.heading2}${className}`} style={customStyle}>
      {children}
    </h2>
  );
};

export const StyledBr = ({ className = "", customStyle }) => {
  return <br className={`hidden sm:block ${className}`} style={customStyle} />;
};

export const StyledParagraph = ({ children, className = "", customStyle }) => {
  return (
    <p
      className={`${styles.paragraph} mt-5 max-w-[470px] ${className}`}
      style={customStyle}
    >
      {children}
    </p>
  );
};

export const FeaturesDiv = ({ children, className = "", customStyle }) => {
  return (
    <div
      className={`${layout.sectionImg} flex-col ${className}`}
      style={customStyle}
    >
      {children}
    </div>
  );
};

export const StyledImg = ({ src, alt, className = "", customStyle }) => {
  return (
    <img
      src={src}
      alt={alt || "image"}
      className={`h-[50%] w-[50%] object-contain ${className}`}
      style={customStyle}
    />
  );
};

export const CardContainer = ({ children, className = "", customStyle }) => {
  return (
    <div
      className={`feature-card flex flex-row rounded-[20px] p-6 ${className}`}
      style={customStyle}
    >
      {children}
    </div>
  );
};

export const Card = ({ children, className = "", customStyle }) => {
  return (
    <div
      className={`h-[64px] w-[64px] rounded-full bg-dimBlue ${styles.flexCenter} ${className}`}
      style={customStyle}
    >
      {children}
    </div>
  );
};

export const TextContainer = ({ children, className = "", customStyle }) => {
  return (
    <div
      className={`ml-3 flex flex-1 flex-col ${className}`}
      style={customStyle}
    >
      {children}
    </div>
  );
};

export const CardHeading = ({ children, className = "", customStyle }) => {
  return (
    <h4
      className={`mb-1 font-poppins text-[18px] font-semibold leading-[23px] text-white ${className}`}
      style={customStyle}
    >
      {children}
    </h4>
  );
};

export const CardText = ({ children, className = "", customStyle }) => {
  return (
    <p
      className={`mb-1 font-poppins text-[16px] font-normal leading-[24px] text-dimWhite  ${className}`}
      style={customStyle}
    >
      {children}
    </p>
  );
};

StyledSection.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};

StyledDiv.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};

StyledHeading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};

StyledBr.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
};

StyledParagraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};

FeaturesDiv.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};

StyledImg.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

CardContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};

TextContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};

CardHeading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};

CardText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};
