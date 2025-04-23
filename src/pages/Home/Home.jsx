import React from "react";
import { Hero, ProjectBento, SkillCards, ContactForm, ShortAbout } from "../../components/component_index";

function Home() {
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