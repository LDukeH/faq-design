"use client";

import PlusIcon from "@/public/icon-plus.svg";
import MinusIcon from "@/public/icon-minus.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface QuestionProps {
  ask: string;
  answer: string;
}

export function Question({ question }: { question: QuestionProps }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full group flex items-center justify-between cursor-pointer text-black hover:text-textHighlight font-semibold text-base transition-all duration-300"
      >
        <span>{question.ask}</span>
        <div className="group-hover:brightness-0 transition-all duration-300">
          {!isOpen ? <PlusIcon /> : <MinusIcon />}
        </div>
      </button>

      {/* when click on the question the answer appear */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="text-zinc-500 mt-4 origin-top"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.2 }}
          >
            {question.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
