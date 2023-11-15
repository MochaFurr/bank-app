import React from "react";
import styles from "./style";
import {
  Billing,
  Business,
  Button,
  CardDeal,
  Clients,
  CTA,
  FeedbackCard,
  Footer,
  GetStarted,
  MainSection,
  Navbar,
  Stats,
  Testimonials,
} from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`bg-primary ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <MainSection />
          </div>
        </div>
      </div>

      <div
        className={`${styles.paddingX} ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`bg-primary ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats /> 
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
