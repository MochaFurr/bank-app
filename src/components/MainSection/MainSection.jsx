import React from "react";
import styles from "../../style";
import { discount, robot } from "../../assets";
import GetStarted from "../GetStarted/GetStarted";

const MainSection = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
      >
        <div className="bg-discount-gradient mb-2 flex flex-row items-center rounded-[10px] px-4 py-[6px]">
          <img src={discount} className="h-[32] w-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount for{" "}
            <span className="text-white">1 month</span> Account
          </p>
        </div>

        <div className="flex w-full flex-row items-center justify-between">
          <h1 className="leadin-[75px] flex-1 font-poppins text-[52px] font-semibold text-white ss:text-[72px] ss:leading-[100px]">
            The Next <br className="hidden sm:block" /> {""}
            <span className="text-gradient">Generation</span>{" "}
          </h1>

          <div className="hidden ss:flex md:mr-4">
            <GetStarted />
          </div>
        </div>

        <h1 className="leadin-[75px] w-full font-poppins text-[52px] font-semibold text-white ss:text-[68px] ss:leading-[100px]">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. <br />
          We examine annual percentage rates, annual fees.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted/>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
