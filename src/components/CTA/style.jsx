import styles from "../../style";

export const StyledSection = ({ children }) => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 box-shadow flex-col rounded-[20px] sm:flex-row`}
  >
    {children}
  </section>
);


export const TextDiv = ({ children }) => (
    <div className={`flex flex-1 flex-col`}>{children}</div>
  );

  export const ButtonDiv = ({ children }) => (
    <div className={`${styles.flexCenter} sm:ml-0 ml-0 sm:mt-0 mt-10`}>{children}</div>
  );

  export const StyledHeading = ({children}) => (
    <h2 className={`${styles.heading2}`}>
        {children}
    </h2>
  )

  export const StyledParagraph = ({children}) => (
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {children}
    </p>
  )