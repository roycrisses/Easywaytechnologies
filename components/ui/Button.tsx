import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed tracking-wide uppercase";

  // Squarespace Style: Sharp corners, solid fills, borders.
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-amber-500 dark:bg-white dark:text-black dark:hover:bg-zinc-200 border border-slate-900 dark:border-white",
    secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 border border-slate-300 dark:border-zinc-800",
    outline: "bg-transparent border border-amber-300 text-slate-900 hover:border-amber-500 hover:text-amber-600 dark:border-zinc-700 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black",
    ghost: "bg-transparent text-slate-500 hover:text-amber-500 dark:text-zinc-400 dark:hover:text-white",
  };

  const sizes = {
    sm: "text-xs px-5 py-2.5",
    md: "text-sm px-8 py-4",
    lg: "text-base px-10 py-5",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};