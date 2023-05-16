import React, { useEffect, useState } from "react";
import { ITVList, TV_SHOW_ADVENTURE_DETAILS, TV_SHOW_LIST_DETAILS } from "../utils/Constant";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Cards } from "./Cards";

const DETAILS_LIST = [
  "Recommended for you",
  "Animated Adventures",
  "Popular Shows/Dramas",
  "News & Upcoming",
];

const Details = () => {
  const [revealed, setRevealed] = useState<string>("");
  const [active, setActive] = useState<number>(0);
  const [list, setList] = useState<ITVList[]>([...TV_SHOW_LIST_DETAILS, ...TV_SHOW_ADVENTURE_DETAILS]);
  const clickHandler = (
    event: React.MouseEvent<HTMLDivElement>,
    selected: string
  ) => {
    setRevealed((prev) => (prev == selected ? "" : selected));
  };

  function shuffle(array: any) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  useEffect(() => {
    if (active === 0) {
      setList([...TV_SHOW_LIST_DETAILS, ...TV_SHOW_ADVENTURE_DETAILS]);
      return;
    }
    if (active === 1) {
      setList(TV_SHOW_ADVENTURE_DETAILS)
      return
    }
    const newList = shuffle(TV_SHOW_LIST_DETAILS);
    setList(newList);
    setRevealed('')
  }, [active]);

  console.log(list)
  return (
    <div className="w-full flex flex-col">
      <div className="menu w-full p-5 flex justify-evenly flex-wrap">
        {DETAILS_LIST.map((item, idx) => (
          <button
            key={idx}
            className={`text-primary h-20 bg-primary font-[500] text-[12px] md:text-[18px] border-[1px] rounded-[12px] border-bg-white p-5 menu-text-border flex-shrink m-5 ${
              active === idx ? "menu-text-border-active" : ""
            }`}
            onClick={() => setActive(idx)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="cards-container flex flex-wrap justify-evenly gap-10 p-5">
        {list.map((item: any, idx: number) => (
            <AnimatePresence key={`${item.label}-${idx}`} mode="wait">
              <Cards
                cardId={`${item.label}-${idx}`}
                clickHandler={(e) => clickHandler(e, `${item.label}-${idx}`)}
                revealed={revealed}
                imageUrl={item.imageUrl}
                description={item.description}
              />
            </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

export default Details;
