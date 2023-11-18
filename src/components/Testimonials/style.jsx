import PropTypes from "prop-types";
import styles from "../../style";

export const StyledSection = ({
  children,
  className = "",
  customStyle = {},
}) => (
  <section
    className={`${styles.paddingY} ${styles.flexCenter} relative flex-col ${className}`}
    style={customStyle}
  >
    {children}
  </section>
);

export const TextDiv = ({ children, className = "", customStyle = {} }) => (
  <div
    className={`z-[1] mb-6 flex w-full flex-col items-center justify-between sm:mb-16 md:flex-row ${className}`}
    style={customStyle}
  >
    {children}
  </div>
);

export const StyledHeading = ({
  children,
  className = "",
  customStyle = {},
}) => (
  <h1 className={`${styles.heading2} ${className}`} style={customStyle}>
    {children}
  </h1>
);

export const StyledParagraph = ({
  children,
  className = "",
  customStyle = {},
}) => (
  <p
    className={`${styles.paragraph} max-w-[450px] text-left ${className}`}
    style={customStyle}
  >
    {children}
  </p>
);

export const ParagraphDiv = ({
  children,
  className = "",
  customStyle = {},
}) => (
  <div className={`mt-6 w-full md:mt-0 ${className}`} style={customStyle}>
    {children}
  </div>
);

export const CardDiv = ({ children, className = "", customStyle = {} }) => (
  <div
    className={`feedback-container relative z-[1] flex w-full flex-wrap justify-center sm:justify-start ${className}`}
    style={customStyle}
  >
    {children}
  </div>
);

StyledSection.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};

TextDiv.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};

StyledHeading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};

StyledParagraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};

ParagraphDiv.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};

CardDiv.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};
