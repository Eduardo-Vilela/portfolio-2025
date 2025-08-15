import '@/styles/components/button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`custom-button ${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

