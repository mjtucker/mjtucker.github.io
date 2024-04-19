import { useEffect, useState } from "react";
import { useScreenDetector } from "../../hooks/useScreenSize";
import FloatingCard from "../floating-card/floating-card";

const CARD_TIME_INTERVAL = 3000;

const popupCardFeatures = [
  {
    x: "10%",
    y: "10%",
    text: "Passionate front-end developer.",
    description:
      "Take a look at my work experience over the past couple years ",
    anchor: "experience",
  },
  {
    x: "30%",
    y: "70%",
    text: "Former tree-planter.",
    description:
      "I've planted over 150,000 trees throughout Canada. More about this (and me!) ",
  },
  {
    x: "60%",
    y: "15%",
    text: "Studied Software Engineering at McGill University.",
    description: "And yes, I speak French! See more ",
    anchor: "education",
  },
  {
    x: "70%",
    y: "65%",
    text: "Something about my work ethic and wanting to learn",
    description: "sdfuwe wdjhf skdfb",
  },
];

export default function IntroBanner({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: any;
}) {
  const { isMobile } = useScreenDetector();

  const [rotatingCardIndex, setRotatingCardIndex] = useState(0);
  const [highlightedCardIndex, setHighlightedCardIndex] = useState(-1);
  const [rotatingCardInterval, setRotatingCardInterval] = useState(null);

  const startRotatingInterval = (startingIndex?: number) => {
    let i = startingIndex || 0;

    const interval = setInterval(() => {
      setRotatingCardIndex(i);
      i = (i + 1) % popupCardFeatures.length;
    }, CARD_TIME_INTERVAL);
    setRotatingCardInterval(interval);
  };

  const stopRotatingInterval = () => clearInterval(rotatingCardInterval);

  // useEffect(() => {
  //   let options = {
  //     root: window.document,
  //     rootMargin: "0px",
  //     threshold: 0.01, //LOOK BACK AT THIS!
  //   };

  //   var observer = new IntersectionObserver(function (entries) {
  //     if (!entries[0].isIntersecting) {
  //       //has left the view port scrolling down direction
  //       setIsSidebarOpen(true);
  //     } else {
  //       //has entered the viewport scrolling up direction
  //       setIsSidebarOpen(false);
  //     }
  //   }, options);

  //   observer.observe(window.document.getElementById("intro-banner"));
  // }, []);

  useEffect(() => {
    if (highlightedCardIndex !== null && highlightedCardIndex !== -1) {
      stopRotatingInterval();
    } else {
      startRotatingInterval(rotatingCardIndex); // todo readd this when wanting to put carousel on again
    }
  }, [highlightedCardIndex]);

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center p-10 md:p-32 text-slate-200 relative"
      id="intro-banner"
    >
      <div className="text-6xl text-slate-100 font-semibold">hi. I'm MJ!</div>
      <div className="text-2xl mb-4 text-slate-500">
        (or mary jane for long)
      </div>
      <div className="text-lg text-slate-400 text-center max-w-2xl">
        I am software developer passionate about creating cool things on the
        internet, and making them look{" "}
        <span className=" text-green-400 font-semibold">good</span>. I thrive in
        collaborative environments, love (and hate) tackling a tricky bug, and
        occasionally enjoy building a carousel.
        <br />
        <br />
        Currently, I am working as a{" "}
        <span className="text-green-400 font-semibold">
          Senior Software Developer
        </span>{" "}
        at{" "}
        <a
          className="text-green-400 hover:text-green-500 font-semibold"
          href="https://www.konradgroup.com"
          target="_blank"
        >
          Konrad Group
        </a>
        .
        <br /> Feel free to stick around and check out more below!
      </div>
      <a
        className="mt-7 animate-pulse"
        // onClick={() => {
        //   //animate out intro bar
        //   setIsSidebarOpen(true);
        // }}
        href="#about"
      >
        <img className=" w-6 h-6" src="/down-arrow.svg"></img>
      </a>
      {/* {!isMobile &&
        popupCardFeatures.map((card, i) => (
          <FloatingCard
            card={card}
            isCurrent={i === rotatingCardIndex}
            highlightedCardIndex={highlightedCardIndex}
            onCardClick={() => {
              setHighlightedCardIndex(i);
            }}
            setHighlightedCardIndex={setHighlightedCardIndex}
          />
        ))} */}
    </div>
  );
}
