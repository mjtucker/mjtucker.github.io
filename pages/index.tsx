import SideBar from "../src/components/sidebar/sidebar";
import SectionHeader from "../src/components/section-header/section-header";
import { AnchorHTMLAttributes, useEffect, useState } from "react";
import IntroBanner from "../src/components/intro-banner/intro-banner";

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

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const scrollRoot = window.document.getElementById("section-container");
    let navLinks = document.querySelectorAll("nav ul li a");

    scrollRoot.addEventListener("scroll", (event) => {
      let fromTop = scrollRoot.scrollTop;

      Array.from(navLinks).forEach((link) => {
        let section = document.getElementById(
          link.getAttribute("href").replace("#", "")
        );

        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          section.classList.add("active");
          link.classList.add("active");
        } else {
          section.classList.remove("active");
          link.classList.remove("active");
        }
      });
    });
  }, []);

  useEffect(() => {
    const sideBar = window.document.getElementById("side-bar");
    const sectionContainer =
      window.document.getElementById("section-container");

    const introBanner = window.document.getElementById("intro-banner");

    const firstScrollableSection = window.document.getElementById(
      scrollableSection[0].id
    );

    if (isSidebarOpen) {
      sideBar.classList.remove("animate-slide-out");
      sideBar.classList.add("animate-slide-in");
      const sideBarWidth = sideBar.getBoundingClientRect().width;
      sectionContainer.style.marginLeft = `${sideBarWidth}px`;
      //can workshop this
      setTimeout(
        () =>
          firstScrollableSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          }),
        300
      );
    } else {
      if (sideBar.classList.contains("animate-slide-in")) {
        sideBar.classList.remove("animate-slide-in");
        sideBar.classList.add("animate-slide-out");
        sectionContainer.style.marginLeft = `0px`;
        setTimeout(
          () =>
            introBanner.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            }),
          0
        );
      }
    }
  }, [isSidebarOpen]);

  return (
    <div className="flex w-screen h-screen bg-slate-900  text-slate-400 ">
      <div className="w-full h-full relative" id="data-scroller">
        <SideBar />
        <div
          id="section-container"
          className={`h-full ml-0 transition-all ease-in-out duration-1000 scroll-smooth ${
            isSidebarOpen ? "overflow-auto" : "overflow-hidden"
          }`}
        >
          <IntroBanner setIsSidebarOpen={setIsSidebarOpen} />
          {scrollableSection.map((section, index) => (
            <section
              id={section.id}
              key={`section-${section.id}`}
              className={`p-10 h-full`}
            >
              <SectionHeader title={section.title} />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
