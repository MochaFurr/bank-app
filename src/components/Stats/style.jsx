import styles from "../../style";

export const StyledSection = ({ children }) => {
  return (
    <section
      className={`${styles.flexCenter} mb-6 flex-row flex-wrap sm:mb-20 `}
    >
      {children}
    </section>
  );
};

export const StyledDiv = ({ children }) => {
  return (
    <div className={`m-3 flex flex-1 flex-row items-center justify-start `}>
      {children}
    </div>
  );
};

export const StyledHeading = ({ children }) => {
  return (
    <h4
      className={`font-poppins text-[30px] font-semibold leading-[43px] text-white xs:text-[40px] xs:leading-[53px] `}
    >
      {children}
    </h4>
  );
};

export const StyledText = ({ children }) => {
  return (
    <h4
      className={`text-gradient ml-3 font-poppins text-[15px] font-normal uppercase leading-[21px] xs:text-[20px] xs:leading-[26px] `}
    >
      {children}
    </h4>
  );
};
