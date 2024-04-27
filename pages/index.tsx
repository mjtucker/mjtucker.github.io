import SideBar from "../src/components/sidebar/sidebar";
import SectionHeader from "../src/components/section-header/section-header";
import { useEffect, useState } from "react";
import IntroBanner from "../src/components/intro-banner/intro-banner";
import Section from "../src/components/section/section";
import { useScreenDetector } from "../src/hooks/useScreenSize";
import CollapsableSidebar from "../src/components/sidebar/collapsable-sidebar";
import NavBar from "../src/components/nav-bar/nav-bar";
import AboutSection from "../src/components/about-section/about-section";
import ExperienceSection from "../src/components/experience-section/experience-section";
import SkillsSection from "../src/components/skills-section/skills-section";
import EducationSection from "../src/components/education-section/education-section";
import ContactSection from "../src/components/contact-section/contact-section";

const scrollableSection = [
  {
    title: "about",
    id: "about",
  },
  {
    title: "experience",
    id: "experience",
  },
  {
    title: "education",
    id: "education",
  },
];

const activeLinkClass = "text-slate-200";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isMobile, isDesktop } = useScreenDetector();

  useEffect(() => {
    const onPageScrollHandler = (event) => {
      let fromTop = window.scrollY;

      Array.from(navLinks).forEach((link) => {
        let section = document.getElementById(
          link.getAttribute("href").replace("#", "")
        );
        if (!section) return;
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          section.classList.add("active");
          link.classList.add(activeLinkClass);
        } else {
          section.classList.remove("active");
          link.classList.remove(activeLinkClass);
        }
      });
    };
    let navLinks = document.querySelectorAll("nav ul li a");

    //this needs to be throttled??
    window.document.addEventListener("scroll", onPageScrollHandler);

    return () => {
      window.document.removeEventListener("scroll", onPageScrollHandler);
    };
  }, []);

  // const animateOutFromHome = () => {
  //   const sideBar = window.document.getElementById("side-bar");
  //   const sectionContainer =
  //     window.document.getElementById("section-container");

  //   const firstScrollableSection = window.document.getElementById(
  //     scrollableSection[0].id
  //   );

  //   sideBar.classList.remove("animate-slide-out");
  //   sideBar.classList.add("animate-slide-in");
  //   const sideBarWidth = sideBar.getBoundingClientRect().width;
  //   sectionContainer.style.marginLeft = `${sideBarWidth}px`;
  //   //can workshop this
  //   setTimeout(
  //     () =>
  //       firstScrollableSection.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //         inline: "nearest",
  //       }),
  //     300
  //   );
  // };

  // const animateBackToHome = () => {
  //   const sideBar = window.document.getElementById("side-bar");
  //   const sectionContainer =
  //     window.document.getElementById("section-container");

  //   const introBanner = window.document.getElementById("intro-banner");

  //   if (sideBar.classList.contains("animate-slide-in")) {
  //     sideBar.classList.remove("animate-slide-in");
  //     sideBar.classList.add("animate-slide-out");
  //     sectionContainer.style.marginLeft = `0px`;
  //     setTimeout(
  //       () =>
  //         introBanner.scrollIntoView({
  //           behavior: "smooth",
  //           block: "start",
  //           inline: "nearest",
  //         }),
  //       0
  //     );
  //   }
  // };

  // useEffect(() => {
  //   if (isDesktop) {
  //     const sideBar = window.document.getElementById("side-bar");
  //     const sectionContainer =
  //       window.document.getElementById("section-container");

  //     const introBanner = window.document.getElementById("intro-banner");

  //     const firstScrollableSection = window.document.getElementById(
  //       scrollableSection[0].id
  //     );

  //     if (isSidebarOpen) {
  //       // sideBar.classList.remove("animate-slide-out");
  //       // sideBar.classList.add("animate-slide-in");
  //       // const sideBarWidth = sideBar.getBoundingClientRect().width;
  //       // sectionContainer.style.marginLeft = `${sideBarWidth}px`;
  //       // //can workshop this
  //       // setTimeout(
  //       //   () =>
  //       //     firstScrollableSection.scrollIntoView({
  //       //       behavior: "smooth",
  //       //       block: "start",
  //       //       inline: "nearest",
  //       //     }),
  //       //   300
  //       // );
  //       animateOutFromHome();
  //     } else {
  //       // if (sideBar.classList.contains("animate-slide-in")) {
  //       //   sideBar.classList.remove("animate-slide-in");
  //       //   sideBar.classList.add("animate-slide-out");
  //       //   sectionContainer.style.marginLeft = `0px`;
  //       //   setTimeout(
  //       //     () =>
  //       //       introBanner.scrollIntoView({
  //       //         behavior: "smooth",
  //       //         block: "start",
  //       //         inline: "nearest",
  //       //       }),
  //       //     0
  //       //   );
  //       // }
  //       animateBackToHome();
  //     }
  //   }
  // }, [isSidebarOpen]);

  return (
    <div
      className="flex flex-col w-full relative bg-slate-900 text-slate-400 transition-all duration-700 ease-in-out translate-x-0"
      id="scroller"
    >
      <div
        id="section-container"
        className={`ml-0 transition-all ease-in-out duration-1000 scroll-smooth h-screen w-full`}
      >
        <IntroBanner
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </div>
  );
}
