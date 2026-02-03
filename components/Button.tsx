import React from 'react';

interface ButtonProps {
  text: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, className = "" }) => {
  const CHECKOUT_LINK = "https://pay.hotmart.com/H104201286P?checkoutMode=10";

  return (
    <a 
      href={CHECKOUT_LINK}
      className={`block w-full max-w-md mx-auto bg-[#DC2626] hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105 glow-red shadow-lg uppercase text-sm md:text-base tracking-wide ${className}`}
    >
      {text}
    </a>
  );
};