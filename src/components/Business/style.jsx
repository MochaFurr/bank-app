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
  return (
    <br className={`hidden sm:block ${className}`} style={customStyle} />
  );
};

export const StyledParagraph = ({ children, className = "", customStyle }) => {
  return (
    <p className={`${styles.paragraph } max-w-[470px] mt-5 ${className}`} style={customStyle}>
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
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};

StyledParagraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};
