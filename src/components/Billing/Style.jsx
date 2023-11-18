import styles, { layout } from "../../style";

export const StyledSection = ({ children }) => (
  <section className={`${layout.sectionReverse}`}>{children}</section>
);

export const ImageDiv = ({ children }) => (
  <div className={`${layout.sectionImgReverse}`}>{children}</div>
);

export const StyledImg = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt || "image"}
      className={`z-5 relative h-[100%] w-[100%]`}
    />
  );
};

export const WhiteGradientDiv = () => (
  <div
    className={`white__gradient absolute -left-1/2 top-0 z-[3] h-[50%] w-[50%] rounded-full`}
  />
);

export const PinkGradientDiv = () => (
  <div
    className={`pink__gradient absolute -left-1/2 bottom-0 z-[0] h-[50%] w-[50%] rounded-full`}
  />
);

export const TextDiv = ({ children }) => (
  <div className={`${layout.sectionInfo}`}>{children}</div>
);

export const StyledHeading = ({ children }) => (
  <h2 className={`${styles.heading2}`}>{children}</h2>
);

export const StyledParagraph = ({ children }) => (
  <h2 className={`${styles.paragraph} mt-5 max-w-[470px]`}>{children}</h2>
);

export const AppIconDiv = ({ children }) => (
  <div className={`mt-6 flex flex-row sm:mt-10`}>{children}</div>
);

export const AppImg = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt || "image"}
      className={`mr-5 h-[42px] w-[128px] cursor-pointer object-contain`}
    />
  );
};
