import styles, { layout } from "../../style";

export const StyledSection = ({ children }) => (
  <section className={`${layout.section} `}>{children}</section>
);

export const TextDiv = ({ children }) => (
  <div className={`${layout.sectionInfo} `}>{children}</div>
);

export const ImageDiv = ({ children }) => (
  <div className={`${layout.sectionImgReverse} `}>{children}</div>
);

export const StyledImg = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt || "image"}
      className={`z-5 relative h-[100%] w-[100%] `}
    />
  );
};

export const StyledHeading = ({ children }) => (
  <h2 className={`${styles.heading2} `}>{children}</h2>
);

export const StyledParagraph = ({ children }) => (
  <h2 className={`${styles.paragraph} mt-5 max-w-[470px] `}>{children}</h2>
);
