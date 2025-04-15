import React from "react";
import { Hero, ProjectBento, SkillCards, ContactForm } from "../../components/component_index";

function Home() {
  return (
    <>
      <Hero />
      {/* <ProjectBento /> */}
      <SkillCards />
      <ContactForm />
    </>
  );
}

export default Home;