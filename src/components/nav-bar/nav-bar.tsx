import { useEffect, useRef, useState } from "react";
import { useScreenDetector } from "../../hooks/useScreenSize";
import { contactSections } from "../contact-section/contact-section";

const navSections = [
  {
    name: "about",
  },
  {
    name: "experience",
  },
  {
    name: "contact",
  },
];

//todo: scroll to needs some work with mobile nav bar
const NavBar = ({}: {}) => {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const mobileNavBar = useRef(null);

  const closeNav = () => setIsMobileNavOpen(false);
  const openNav = () => setIsMobileNavOpen(true);

  useEffect(() => {
    const sectionContainer = window.document.getElementById("scroller");

    if (isMobileNavOpen) {
      mobileNavBar?.current?.classList.add("animate-slide-in");
      mobileNavBar?.current?.classList.remove("animate-slide-out");
      sectionContainer.classList.add("blur");
      window.document.body.style.overflow = "hidden";
    } else {
      mobileNavBar?.current?.classList.remove("animate-slide-in");
      mobileNavBar?.current?.classList.add("animate-slide-out");
      sectionContainer.classList.remove("blur");
      window.document.body.style.overflow = "";
    }
  }, [isMobileNavOpen]);

  useEffect(() => {
    if (isDesktop) {
      setIsMobileNavOpen(false);
    }
  }, [isDesktop]);

  return isTablet ? (
    <>
      <div className="fixed top-0 flex justify-end w-full py-4 px-3 z-10 bg-slate-900 shadow">
        <button onClick={openNav}>
          <img
            className="transition-all duration-200 ease-in-out w-8 h-8 group-hover:w-10 group-hover:h-10"
            src="/hamburger-menu.svg"
          ></img>
        </button>
      </div>
      <div
        className="fixed top-0 right-0 flex flex-col justify-start items-end py-5 px-3 z-10 text-slate-400 bg-slate-900 shadow duration-200 h-full translate-x-full w-44 border-l border-green-400"
        ref={mobileNavBar}
      >
        <button onClick={closeNav}>
          <img
            className="transition-all duration-200 ease-in-out w-8 h-8 group-hover:w-10 group-hover:h-10"
            src="/close-x.svg"
          ></img>
        </button>
        <ul className="grid justify-items-end pt-10">
          {navSections.map((item) => (
            <li className="hover:text-slate-200">
              <a href={`#${item.name}`} onClick={closeNav}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  ) : (
    <>
      <nav className="fixed top-6 right-6 flex flex-col items-end justify-center gap-y-2 z-10 text-slate-400">
        <span className="w-[1px] h-24 d-block bg-slate-400"></span>
        <ul className="grid justify-items-end">
          {navSections.map((item) => (
            <li className="hover:text-slate-200">
              <a href={`#${item.name}`}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="fixed flex bottom-6 left-3 flex-col items-center justify-center gap-y-2 z-10">
        {contactSections.map((item) => (
          <div className="flex items-center justify-center rounded-full h-10 w-10 group">
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <img
                className="transition-all duration-200 ease-in-out w-8 h-8 group-hover:w-10 group-hover:h-10"
                src={item.image}
              ></img>
            </a>
          </div>
        ))}
        <span className="w-[1px] h-24 d-block bg-slate-400"></span>
      </div>
    </>
  );
};

export default NavBar;
