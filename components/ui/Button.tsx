import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gradient" | "outline" | "ghost";
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base active:scale-95";
  const variants = {
    primary:
      "bg-[#007A5E] hover:bg-[#005c46] text-white shadow-lg shadow-[#007A5E]/20",
    gradient:
      "bg-gradient-to-r from-[#007A5E] to-[#00a680] text-white shadow-lg shadow-[#007A5E]/20",
    outline:
      "border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-900 text-slate-900 dark:text-zinc-100",
    ghost:
      "text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
