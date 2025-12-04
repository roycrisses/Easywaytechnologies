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
    primary: "bg-white text-black hover:bg-zinc-200 border border-white",
    secondary: "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-800",
    outline: "bg-transparent border border-zinc-700 text-white hover:border-white hover:bg-white hover:text-black",
    ghost: "bg-transparent text-zinc-400 hover:text-white",
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