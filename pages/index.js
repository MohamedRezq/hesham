import ToggleModeBtn from "components/Header/ToggleModeBtn";
import Head from "next/head";
import FeatureSection from "sections/FeatureSection";
import SkillSection from "sections/SkillSection";
import styles from "../styles/Home.module.css";
import { getAllSkills } from "lib/api/api";
import ProjectSection from "sections/ProjectSection";
import AboutSection from "sections/AboutSection";

export default function Home({ allSkills }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>REZQ - FullStack Web Developer</title>
        <meta
          name="description"
          content="REZQ - A MERN Full-Stack Web Devloper"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
        <script src="https://unpkg.com/tailwindcss-jit-cdn"></script>
      </Head>
      <main className="max-w-screen">
        <FeatureSection />
        <SkillSection skills={allSkills} />
        <ProjectSection />
        <AboutSection />
      </main>
    </div>
  );
}

export async function getStaticProps ({ }) {
  const allSkills = await getAllSkills();
  return{
    props: {allSkills},
  }
}