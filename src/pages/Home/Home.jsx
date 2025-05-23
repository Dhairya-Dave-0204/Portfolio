import React, { useEffect } from "react";
import { Hero, ProjectBento, SkillCards, ContactForm, ShortAbout } from "../../components/component_index";

function Home() {

  useEffect(() => {
    const components = import.meta.glob('../components/SplineBackground/SplineBackground.jsx');
    components['../components/SplineBackground/SplineBackground.jsx']?.();

    const splineComputer = import.meta.glob('../components/SplineComputer/SplineComputer.jsx');
    splineComputer['../components/SplineComputer/SplineComputer.jsx']?.();
  }, []);
  return (
    <>
      <Hero />
      <ShortAbout />
      <ProjectBento />
      <SkillCards />
      <ContactForm />
    </>
  );
}

export default Home;