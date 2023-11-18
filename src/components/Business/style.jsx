import styles, { layout } from "../../style";

export const StyledSection = ({ children }) => {
  return <section className={`${layout.section} `}>{children}</section>;
};

export const StyledDiv = ({ children }) => {
  return <div className={`${layout.info} `}>{children}</div>;
};

export const StyledHeading = ({ children }) => {
  return <h2 className={`${styles.heading2}`}>{children}</h2>;
};

export const StyledBr = () => {
  return <br className={`hidden sm:block `} />;
};

export const StyledParagraph = ({ children }) => {
  return (
    <p className={`${styles.paragraph} mt-5 max-w-[470px] `}>{children}</p>
  );
};

export const FeaturesDiv = ({ children }) => {
  return <div className={`${layout.sectionImg} flex-col `}>{children}</div>;
};

export const StyledImg = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt || "image"}
      className={`h-[50%] w-[50%] object-contain `}
    />
  );
};

export const CardContainer = ({ children }) => {
  return (
    <div className={`feature-card flex flex-row rounded-[20px] p-6 `}>
      {children}
    </div>
  );
};

export const Card = ({ children }) => {
  return (
    <div
      className={`h-[64px] w-[64px] rounded-full bg-dimBlue ${styles.flexCenter} `}
    >
      {children}
    </div>
  );
};

export const TextContainer = ({ children }) => {
  return <div className={`ml-3 flex flex-1 flex-col `}>{children}</div>;
};

export const CardHeading = ({ children }) => {
  return (
    <h4
      className={`mb-1 font-poppins text-[18px] font-semibold leading-[23px] text-white `}
    >
      {children}
    </h4>
  );
};

export const CardText = ({ children }) => {
  return (
    <p
      className={`mb-1 font-poppins text-[16px] font-normal leading-[24px] text-dimWhite  `}
    >
      {children}
    </p>
  );
};
