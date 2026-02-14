import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-4 font-serif font-bold tracking-wider transition-all duration-300 ease-out text-sm uppercase transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-gold text-midnight hover:bg-gold-light hover:shadow-[0_0_20px_rgba(192,160,76,0.4)]",
    secondary: "bg-midnight text-white border border-midnight hover:border-gold hover:text-gold",
    outline: "bg-transparent border border-gold text-gold hover:bg-gold hover:text-midnight",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;