import styles from "../../style";

export const StyledSection = ({ children }) => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
    {children}
  </section>
);

export const StyledDiv = ({ children }) => (
  <div className={`${styles.flexStart} mb-8 w-full flex-col md:flex-row `}>
    {children}
  </div>
);

export const ImageDiv = ({ children }) => (
  <div className={`mr-10 flex flex-1 flex-col justify-start`}>{children}</div>
);

export const StyledImg = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt || "image"}
      className="h-[72px] w-[266px] object-contain"
    />
  );
};

export const StyledParagraph = ({ children }) => (
  <h2 className={`${styles.paragraph} mt-4 max-w-[310px] `}>{children}</h2>
);

export const LinkDiv = ({ children }) => (
  <div className="mt-10 flex flex-[1.5] flex-row flex-wrap justify-between md:mt-0">
    {children}
  </div>
);

export const LinkHeading = ({ children }) => (
  <h2 className={`font-poppins text-[18px] font-medium leading-[27px] text-white `}>{children}</h2>
);

export const RightsDiv = ({ children }) => (
  <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
    {children}
  </div>
);

export const RightsParagraph = ({ children }) => (
  <h2
    className={`text-center font-poppins text-[18px] font-normal leading-[27px] text-white `}
  >
    {children}
  </h2>
);

export const SocialDiv = ({ children }) => (
  <div className="flex flex-row md:mt-0 mt-6">{children}</div>
);




