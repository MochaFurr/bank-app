import PropTypes from "prop-types";
import styles, { layout } from "../../style";

export const StyledSection = ({
  children,
  className = "",
  customStyle = {},
}) => (
  <section
    className={`${layout.sectionReverse} ${className}`}
    style={customStyle}
  >
    {children}
  </section>
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

export const WhiteGradientDiv = ({ className = "", customStyle = {} }) => (
  <div
    className={`white__gradient absolute -left-1/2 top-0 z-[3] h-[50%] w-[50%] rounded-full ${className}`}
    style={customStyle}
  />
);

export const PinkGradientDiv = ({ className = "", customStyle = {} }) => (
  <div
    className={`pink__gradient absolute -left-1/2 bottom-0 z-[0] h-[50%] w-[50%] rounded-full ${className}`}
    style={customStyle}
  />
);

export const TextDiv = ({ children, className = "", customStyle = {} }) => (
  <div className={`${layout.sectionInfo} ${className}`} style={customStyle}>
    {children}
  </div>
);

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
    <h2 className={`${styles.paragraph} max-w-[470px] mt-5 ${className}`} style={customStyle}>
      {children}
    </h2>
  );

  export const AppIconDiv = ({ children, className = "", customStyle = {} }) => (
    <div className={`sm:mt-10 mt-6 flex-row flex ${className}`} style={customStyle}>
      {children}
    </div>
  );

  export const AppImg = ({ src, alt, className = "", customStyle }) => {
    return (
      <img
        src={src}
        alt={alt || "image"}
        className={`w-[128px] h-[42px] object-contain mr-5 cursor-pointer ${className}`}
        style={customStyle}
      />
    );
  };

StyledSection.propTypes = {
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

WhiteGradientDiv.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
};

PinkGradientDiv.propTypes = {
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

  AppIconDiv.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    customStyle: PropTypes.object,
  };

  AppImg.propTypes = {
    className: PropTypes.string,
    customStyle: PropTypes.object,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  };