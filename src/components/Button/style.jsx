import PropTypes from "prop-types";

export const StyledButton = ({ children }) => (
  <button
    className={`bg-blue-gradient mt-10 px-6 py-4 font-poppins text-[18px] font-medium text-primary outline-none`}
  >
    {children}
  </button>
);

StyledButton.propTypes = {
  children: PropTypes.node,
};
