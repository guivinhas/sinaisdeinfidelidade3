import React, { useState } from 'react';
import { Icons } from './Icons';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-800 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 px-2 text-left focus:outline-none group"
      >
        <span className={`font-medium text-sm md:text-base ${isOpen ? 'text-red-500' : 'text-zinc-300 group-hover:text-white'}`}>
          {question}
        </span>
        <span className={`text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <Icons.ChevronDown size={20} />
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pb-4 px-2 text-zinc-400 text-sm leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const Accordion: React.FC<{ items: AccordionItemProps[] }> = ({ items }) => {
  return (
    <div className="bg-[#111111] border border-zinc-800 rounded-lg p-2 md:p-4">
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};