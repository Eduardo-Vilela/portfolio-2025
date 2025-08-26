import '@/styles/components/button.css';
import Link from 'next/link';

interface ButtonProps {
  href: string; // 🔥 Ahora es obligatorio
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean
}

export const Button = ({
  href,
  variant = 'primary',
  children,
  className = '',
}: ButtonProps) => {
  return (
    <Link href={href} className={`custom-button ${variant} ${className}`} target="_blank">
      {children}
    </Link>
  );
};

