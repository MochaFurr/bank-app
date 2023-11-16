import PropTypes from "prop-types";
import styles from "../../style";

export const StyledSection = ({
  children,
  className = "",
  customStyle = {},
}) => {
  return (
    <section
      className={`${styles.flexCenter} mb-6 flex-row flex-wrap sm:mb-20 ${className}`}
      style={customStyle}
    >
      {children}
    </section>
  );
};

export const StyledDiv = ({ children, className = "", customStyle = {} }) => {
  return (
    <div className={`flex-1 flex justify-start items-center flex-row m-3 ${className}`} style={customStyle}>
      {children}
    </div>
  );
};

export const StyledHeading = ({ children, className = "", customStyle = {} }) => {
    return (
        <h4 className={`xs:text-[40px] font-poppins text-[30px] font-semibold leading-[43px] text-white xs:leading-[53px] ${className}`}
        style={customStyle}
      >
        {children}
      </h4>
    )
}

export const StyledText = ({ children, className = "", customStyle = {} }) => {
  return (
    <h4
      className={`xs:text-[20px] font-poppins text-[15px] font-normal leading-[21px] text-gradient uppercase ml-3 xs:leading-[26px] ${className}`}
      style={customStyle}
    >
      {children}
    </h4>
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

StyledText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};
