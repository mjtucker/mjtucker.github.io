import { useEffect, useRef, useState } from "react";

const FloatingCard = ({
  card,
  isCurrent,
  highlightedCardIndex,
  onCardClick,
  setHighlightedCardIndex,
}: {
  card: any;
  isCurrent: boolean;
  highlightedCardIndex: number;
  onCardClick: () => void;
  setHighlightedCardIndex: any;
}) => {
  const cardRef = useRef(null);
  const cardContentRef = useRef(null);

  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (isFlipped) {
      onCardClick();
      cardContentRef.current.classList.add("animate-flip-front");
      cardContentRef.current.classList.remove("animate-flip-back");
    } else if (highlightedCardIndex !== null && highlightedCardIndex !== -1) {
      setHighlightedCardIndex(null);
      cardContentRef.current.classList.remove("animate-flip-front");
      cardContentRef.current.classList.add("animate-flip-back");
    }
  }, [isFlipped]);

  // // TODO: COMMENT BACK INT WITH OPACITY ON DIVIDER
  // useEffect(() => {
  //   if (isCurrent) {
  //     cardRef.current.classList.remove("animate-fade-out");
  //     cardRef.current.classList.add("animate-fade-in");
  //   } else if (cardRef.current.classList.contains("animate-fade-in")) {
  //     cardRef.current.classList.remove("animate-fade-in");
  //     cardRef.current.classList.add("animate-fade-out");
  //   }
  // }, [isCurrent]);

  return (
    <button
      ref={cardRef}
      className="absolute h-44 w-60 transition-all ease-in-out duration-1000" //add opacity-0 back in
      style={{ top: card.x, left: card.y }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        ref={cardContentRef}
        className={`transition-all ease-in-out duration-1000 relative w-full h-full rounded-3xl p-10 border  bg-slate-700 `}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="flex flex-col justify-center w-full h-full top-0 left-0 absolute text-slate-300 p-2"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-xl ">{card.text}</div>
          <img
            className="w-8 h-8 right-0 bottom-0 pr-3 pb-3 absolute"
            src="/curved-arrow-point-up.svg"
          ></img>
        </div>
        <div
          className="flex flex-row items-center justify-center w-full h-full top-0 left-0 absolute p-2"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className=" text-base text-slate-400">
            {card.description}
            {card?.anchor && (
              <span>
                <a className="underline" href={`#${card.anchor}`}>
                  here
                </a>
                .
              </span>
            )}
          </div>
          <img
            className="w-8 h-8 right-0 top-0 pt-3 pr-3 absolute"
            src="/curved-arrow-point-down.svg"
          ></img>
        </div>
      </div>
    </button>
  );
};

export default FloatingCard;
