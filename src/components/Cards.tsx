import React from "react";
import { motion } from "framer-motion";

interface ICard {
  cardId: string;
  clickHandler: React.MouseEventHandler<HTMLDivElement>;
  revealed: string;
  imageUrl: string;
  description: string
}

export const Cards = ({ cardId, clickHandler, revealed, imageUrl, description }: ICard) => {
  let cardProps = {
    layoutId: cardId,
    id: cardId,
    className: "card",
    onClick: clickHandler,
  };
  let animationProps = {
    initial: { rotateY: 180, transition: { duration: 1.3 }},
    revealedType: { rotateY: 0, transition: { duration: 1.3 }},
    // exit: { rotateY: 170, transition: { duration: 3 } },
  };
  return (
    <motion.div {...cardProps} animate={revealed !== cardId ? 'initial' : 'revealedType'} whileHover={{ scale: 1.08}} transition={{ type: "spring", stiffness: 400, damping: 10 }} variants={animationProps} className="max-w-[400px] h-auto object-contain flex justify-center items-center rounded-[12px] border-[1px] border-primary cursor-pointer overflow-y-auto  image ">
      {revealed !== cardId ? (
        <img alt={cardId} src={imageUrl} style={{transform: "rotateY(180deg)"}}/>
      ) : (
        <p className="tag bg-secondary p-5 h-full overflow-y-auto">{description}</p>
      )}
    </motion.div>
  );
};
