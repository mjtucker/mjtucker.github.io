import SideBar from "../src/components/sidebar/sidebar";
import SectionHeader from "../src/components/section-header/section-header";
import { useEffect, useState } from "react";
import IntroBanner from "../src/components/intro-banner/intro-banner";
import Section from "../src/components/section/section";
import { useScreenDetector } from "../src/hooks/useScreenSize";
import CollapsableSidebar from "../src/components/sidebar/collapsable-sidebar";
import NavBar from "../src/components/nav-bar/nav-bar";

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

  useEffect(() => {
    if (isMobile) {
      const sectionContainer =
        window.document.getElementById("section-container");
      sectionContainer.style.marginLeft = `0px`;
    }
  }, [isMobile]);

  return (
    <div
      className="flex flex-col w-full relative bg-slate-900 text-slate-400 transition-all duration-700 ease-in-out translate-x-0"
      id="scroller"
    >
      <div
        id="section-container"
        className={`ml-0 transition-all ease-in-out duration-1000 scroll-smooth h-screen`}
      >
        <IntroBanner
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <section
          id="about"
          key={`section-about`}
          className={`p-8 bg-slate-900 flex justify-center`}
        >
          <div className="max-w-3xl w-full text-sm md:text-base">
            <SectionHeader title="about" />
            <div className="py-4">
              Bibendum ut tristique et egestas quis ipsum suspendisse. Porttitor
              eget dolor morbi non. Consequat nisl vel pretium lectus quam id
              leo in vitae. Penatibus et magnis dis parturient. Ut tortor
              pretium viverra suspendisse potenti nullam ac tortor. In eu mi
              bibendum neque egestas. Convallis posuere morbi leo urna. Blandit
              turpis cursus in hac habitasse platea. Lobortis mattis aliquam
              faucibus purus in massa tempor nec. Interdum varius sit amet
              mattis. A diam sollicitudin tempor id. In hac habitasse platea
              dictumst. Dictum at tempor commodo ullamcorper. Vulputate
              dignissim suspendisse in est ante. Neque sodales ut etiam sit. Nec
              feugiat nisl pretium fusce id. Risus nullam eget felis eget nunc.
              Varius quam quisque id diam.
              <br />
              <br />
              habitasse platea dictumst. Dictum at tempor commodo ullamcorper.
              Vulputate dignissim suspendisse in est ante. Neque sodales ut
              etiam sit. Nec feugiat nisl pretium fusce id. Risus nullam eget
              felis eget nunc. Varius quam quisque id diam. habitasse platea
              <br />
              <br />
              <span className="block h-[1px] bg-green-400 w-full"></span>
              <br />
              dictumst. Dictum at tempor commodo ullamcorper. Vulputate
              dignissim suspendisse in est ante. Neque sodales ut etiam sit. Nec
              feugiat nisl pretium fusce id. Risus nullam eget felis eget nunc.
              Varius quam quisque id diam.
              <br />
              <br />
              <span className="block h-[1px] bg-green-400 w-full"></span>
              <br />
              dictumst. Dictum at tempor commodo ullamcorper. Vulputate
              dignissim suspendisse in est ante. Neque sodales ut etiam sit. Nec
              feugiat nisl pretium fusce id. Risus nullam eget felis eget nunc.
              Varius quam quisque id diam.
            </div>
          </div>
        </section>
        <section
          id="experience"
          key={`section-experience`}
          className={`p-8 bg-slate-900 flex justify-center`}
        >
          <div className="max-w-3xl w-full">
            <SectionHeader title="experience" />
            <div className="flex flex-col md:flex-row md:items-center my-4 text-slate-300">
              <div className="flex flex-row items-center whitespace-nowrap">
                <span>Senior Software Developer | </span>
                <i className="text-slate-400 text-sm ml-1"> Konrad Group</i>
                <div className="inline-block md:hidden ml-2 h-[1px] bg-green-400 w-full"></div>
              </div>
              <span className="hidden md:block mx-2 h-[1px] bg-green-400 w-full"></span>
              <span className="whitespace-nowrap text-xs uppercase pt-1 md:pt-0">
                Jan 2024 - present
              </span>
            </div>
            <ul className="pl-6 text-sm mb-4 list-disc">
              <li>
                dictumst. Dictum at tempor commodo ullamcorper. Vulputate
                dignissim suspRisus nullam eget felis eget nunc. Varius quam
                quisque id diam.
              </li>
              <li>
                dictumst. Dictum at tempor commodo ullamcorper. Vulputate
                dignissim suspendisse in est ante. Neque sodales ut etiam sit.
                Nec feugiat nisl pretium
              </li>
              <li>
                dictumst. Dictum at tempor commodo ullamcorper. Vulputate
                dignissim suspendisse in est
              </li>
            </ul>
            <div className="flex flex-row items-start text-slate-300">
              <span className="whitespace-nowrap">
                Software Developer I |{" "}
                <i className="text-slate-400 text-sm">Konrad Group</i>
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center mb-4 text-slate-300">
              <div className="flex flex-row items-center whitespace-nowrap">
                <span>Software Developer II | </span>
                <i className="text-slate-400 text-sm ml-1"> Konrad Group</i>
                <div className="inline-block md:hidden ml-2 h-[1px] bg-green-400 w-full"></div>
              </div>
              <span className="hidden md:block mx-2 h-[1px] bg-green-400 w-full"></span>
              <span className="whitespace-nowrap text-xs uppercase pt-1 md:pt-0">
                Jul 2021 - Jan 2024
              </span>
            </div>
            <ul className="pl-6 text-sm mb-4 list-disc">
              <li>
                dictumst. Dictum at tempor commodo ullamcorper. Vulputate
                dignissim suspendisse in est ante. Neque sodales ut etiam sit.
                Nec feugiat nisl pretium fusce id.
              </li>
              <li>
                dictumst. Dictum at tempor commodo ullamcorper. Vulputate
                dignissim suspendisse in est ante. Neque sodales ut etiam sit.
                Nec feugiat nisl pretium fusce id. Risus nullam eget felis eget
                nunc. Varius quam quisque id diam.
              </li>
            </ul>
            <div className="flex flex-col md:flex-row md:items-center mb-4 text-slate-300">
              <div className="flex flex-row items-center whitespace-nowrap">
                <span>Associate Software Developer | </span>
                <i className="text-slate-400 text-sm ml-1"> Konrad Group</i>
                <div className="inline-block md:hidden ml-2 h-[1px] bg-green-400 w-full"></div>
              </div>
              <span className="hidden md:block mx-2 h-[1px] bg-green-400 w-full"></span>
              <span className="whitespace-nowrap text-xs uppercase pt-1 md:pt-0">
                Jan 2021 - Jul 2021
              </span>
            </div>
            <ul className="pl-6 text-sm mb-4 list-disc">
              <li>
                dictumst. Dictum at tempor commodo ullamcorper. Vulputate
                dignissim suspendisse in est ante. Neque sodales ut etiam sit.
                Nec feugiat nisl pretium fusce id. Risus nullam eget felis eget
                nunc. Varius quam quisque id diam.
              </li>
              <li>
                dictumst. Dictum at tempor commodo ullamcorper. Vulputate
                dignissim suspendisse
              </li>
            </ul>

            {/* <div className="flex flex-row items-center my-4">
                Languages
                <span className="ml-2 block h-[1px] bg-green-400 w-full"></span>
              </div>
              <ul className="pl-3 text-sm">
                <li>Typescript/JavaScript</li>
                <li>CSS</li>
                <li>GraphQl</li>
              </ul>
              <div className="flex flex-row items-center my-4">
                Frameworks
                <span className="ml-2 block h-[1px] bg-green-400 w-full"></span>
              </div>
              <ul className="pl-3 text-sm">
                <li>React</li>
                <li>Node.js</li>
                <li>Next.js</li>
              </ul>
              <div className="flex flex-row items-center my-4">
                Tools
                <span className="ml-2 block h-[1px] bg-green-400 w-full"></span>
              </div>
              <ul className="pl-3 text-sm">
                <li>Git</li>
                <li>VSCode</li>
                <li>Storybook</li>
              </ul> */}
          </div>
        </section>
        <section
          id="skills"
          key={`section-skills`}
          className={`p-8 bg-slate-900 flex justify-center`}
        >
          <div className="max-w-3xl w-full">
            <SectionHeader title="skills" />
            <div className="flex flex-row items-center my-4 text-slate-300">
              <span className="whitespace-nowrap">Languages</span>
              <span className="ml-2 block h-[1px] bg-green-400 w-full"></span>
            </div>
            <ul className="grid grid-cols-3 pl-6 text-sm mb-4 list-disc">
              <li>react 1</li>
              <li>react 2</li>
              <li>react 3</li>
              <li>react 4</li>
              <li>react 5</li>
              <li>react 6</li>
              <li>react 7</li>
              <li>react 8</li>
              <li>react 9</li>
            </ul>
            <div className="flex flex-row items-center my-4 text-slate-300">
              <span className="whitespace-nowrap">Frameworks</span>
              <span className="ml-2 block h-[1px] bg-green-400 w-full"></span>
            </div>
            <ul className="grid grid-cols-3 pl-6 text-sm mb-4 list-disc">
              <li>react 1</li>
              <li>react 2</li>
              <li>react 3</li>
              <li>react 4</li>
              <li>react 5</li>
              <li>react 6</li>
              <li>react 7</li>
              <li>react 8</li>
              <li>react 9</li>
            </ul>
            <div className="flex flex-row items-center my-4 text-slate-300">
              <span className="whitespace-nowrap">Tools</span>
              <span className="ml-2 block h-[1px] bg-green-400 w-full"></span>
            </div>
            <ul className="grid grid-cols-3 pl-6 text-sm mb-4 list-disc">
              <li>react 1</li>
              <li>react 2</li>
              <li>react 3</li>
              <li>react 4</li>
              <li>react 5</li>
              <li>react 6</li>
              <li>react 7</li>
              <li>react 8</li>
              <li>react 9</li>
            </ul>
          </div>
        </section>
        <section
          id="education"
          key={`section-education`}
          className={`p-8 bg-slate-900 flex justify-center`}
        >
          <div className="max-w-3xl w-full">
            <SectionHeader title="education" />
            <div className="flex flex-row items-center md:justify-center my-4 text-slate-300">
              <div className="flex flex-col md:flex-row whitespace-nowrap md:items-center w-full">
                <div className="flex flex-row w-full items-center">
                  <span>Bachelor of Software Engineering</span>
                  <span className="block md:hidden ml-2 h-[1px] bg-green-400 w-full"></span>
                  <span className="hidden md:block ml-2">{" | "}</span>
                </div>
                <i className="text-slate-400 uppercase text-xs md:ml-2">
                  McGill University
                </i>
              </div>
              <span className="hidden md:block ml-2 h-[1px] bg-green-400 w-full"></span>
            </div>
            <ul className="pl-3 text-sm mb-4">
              <li>
                dictumst. Dictum at tempor commodo ullamcorper. Vulputate
                dignissim suspendisse in est ante. Neque sodales ut etiam sit.
                Nec feugiat nisl pretium fusce id. Risus nullam eget felis eget
                nunc. Varius quam quisque id diam.
              </li>
            </ul>
          </div>
        </section>
        <section
          id="contact"
          key={`section-contact`}
          className={`p-8 h-full bg-slate-900 flex justify-center p-`}
        >
          <div className="max-w-3xl w-full">
            <SectionHeader title="Let's connect!" />
            <div className="flex flex-col my-4 text-slate-400 text-sm md:text-base">
              Please feel free to connect with me on any of the following
              platforms - I am always happy to chat.
              <div className="flex flex-row w-full justify-center items-center my-4 gap-3">
                <span className="block h-[1px] bg-green-400 w-1/2"></span>
                <div className="flex items-center justify-center rounded-full w-12 h-12 group">
                  <a
                    href="mailto:mjtucker08@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="transition-all duration-200 ease-in-out w-12 h-12 group-hover:w-10 group-hover:h-10"
                      src="/mail_icon.svg"
                    ></img>
                  </a>
                </div>
                <div className="flex items-center justify-center rounded-full w-12 h-12 group">
                  <a
                    href="https://github.com/mjtucker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="transition-all duration-200 ease-in-out w-12 h-12 group-hover:w-10 group-hover:h-10"
                      src="/github-icon.svg"
                    ></img>
                  </a>
                </div>
                <div className="flex items-center justify-center rounded-full w-12 h-12 group">
                  <a
                    href="https://www.linkedin.com/in/maryjanetucker/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="transition-all duration-200 ease-in-out w-12 h-12 group-hover:w-10 group-hover:h-10"
                      src="/linkedin-icon.svg"
                    ></img>
                  </a>
                </div>
                <span className=" h-[1px] bg-green-400 w-1/2"></span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
