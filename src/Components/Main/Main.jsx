import React from "react";
import Section1 from "./section-1"
import Section2 from "./section-2"
import Section3 from "./section-3"
import Section4 from "./section-4"
// import Section5 from "./section-5";

const Main = () => {
  return (
    <main>
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        {/* <Section5 /> */}
      </div>
    </main>
  );
};

export default Main;
