import { Question } from "./Question";
import Image from "next/image";

interface QuestionProps {
  ask: string;
  answer: string;
}

const questions: QuestionProps[] = [
  {
    ask: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    ask: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor is free to use. You can access a variety of challenges without any cost. However, there are also premium challenges available for a small fee that offer additional features.",
  },
  {
    ask: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use Frontend Mentor projects in your portfolio. Completing these challenges is a great way to showcase your skills and demonstrate your ability to build real-world applications.",
  },
  {
    ask: "How can I get help if I'm stuck on a challenge?",
    answer:
      "If you're stuck on a challenge, you can seek help from the Frontend Mentor community. There are forums and Discord channels where you can ask questions, share your code, and get feedback from other developers.",
  },
];

export function Faq() {
  return (
    <div>
      <div className="w-full flex items-center gap-8 text-5xl font-bold text-textPrimary">
        <Image alt="Star Icon" src="/icon-star.svg" height={48} width={48} />
        FAQs
      </div>
      <div className="mt-8 flex flex-col gap-6 h-96 overflow-y-scroll py-4 w-full scrollbar-hide">
        {questions.map((question, index) => (
          <Question key={index} question={question} />
        ))}
      </div>
    </div>
  );
}
