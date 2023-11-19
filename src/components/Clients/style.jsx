import styles from "../../style";

export const StyledSection = ({ children }) => (
  <section className={`${styles.flexCenter} my-4 `}>{children}</section>
);

export const StyledDiv = ({ children }) => (
  <div className={`${styles.flexCenter} w-full flex-wrap `}>{children}</div>
);

// TO DO on hover - some efect
export const ImageDiv = ({ children }) => (
  <div className={`flex-1 ${styles.flexCenter} min-w-[120px] sm:min-w-[192px]`}>
    {children}
  </div>
);

export const StyledImg = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt || "image"}
      className={"w-[100px] object-contain sm:w-[192px]"}
    />
  );
};
