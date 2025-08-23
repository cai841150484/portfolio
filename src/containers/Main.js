import {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
// Removed Proficiency section (StackProgress)
import WorkExperience from "./workExperience/WorkExperience";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topButton/Top";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import "./Main.scss";
import { Helmet } from "react-helmet-async";

const Main = () => {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>Hao Cai | UI/UX Designer Portfolio</title>
        <meta name="description" content="UI/UX 设计作品集：研究、线框、原型与视觉表达，涵盖网页与移动端体验设计。" />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + import.meta.env.BASE_URL : '/portfolio/'} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hao Cai | UI/UX Designer Portfolio" />
        <meta property="og:description" content="UI/UX 设计作品集：研究、线框、原型与视觉表达，涵盖网页与移动端体验设计。" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.origin + import.meta.env.BASE_URL : 'https://cai841150484.github.io/portfolio/'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hao Cai | UI/UX Designer Portfolio" />
        <meta name="twitter:description" content="UI/UX 设计作品集：研究、线框、原型与视觉表达，涵盖网页与移动端体验设计。" />
      </Helmet>
      {isShowingSplashAnimation && splashScreen.enabled ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <main id="main" role="main">
            <Greeting />
            <Skills />
            <Education />
            <WorkExperience />
            {/* Blogs, Talks, Podcast sections removed */}
            <Profile />
          </main>
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </div>
  );
};

export default Main;
