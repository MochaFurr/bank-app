import PropTypes from "prop-types";
import styles, { layout } from "../../style";

export const StyledSection = ({
  children,
  className = "",
  customStyle = {},
}) => (
  <section className={`${layout.section} ${className}`} style={customStyle}>
    {children}
  </section>
);

export const TextDiv = ({ children, className = "", customStyle = {} }) => (
  <div className={`${layout.sectionInfo} ${className}`} style={customStyle}>
    {children}
  </div>
);

export const ImageDiv = ({ children, className = "", customStyle = {} }) => (
  <div
    className={`${layout.sectionImgReverse} ${className}`}
    style={customStyle}
  >
    {children}
  </div>
);

export const StyledImg = ({ src, alt, className = "", customStyle }) => {
  return (
    <img
      src={src}
      alt={alt || "image"}
      className={`z-5 relative h-[100%] w-[100%] ${className}`}
      style={customStyle}
    />
  );
};

export const StyledHeading = ({
  children,
  className = "",
  customStyle = {},
}) => (
  <h2 className={`${styles.heading2} ${className}`} style={customStyle}>
    {children}
  </h2>
);

export const StyledParagraph = ({
  children,
  className = "",
  customStyle = {},
}) => (
  <h2
    className={`${styles.paragraph} mt-5 max-w-[470px] ${className}`}
    style={customStyle}
  >
    {children}
  </h2>
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

ImageDiv.propTypes = {
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
