import '@/styles/components/button.css';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  download?: boolean;
}

export const Button = ({
  href,
  variant = 'primary',
  children,
  className = '',
  download = false,
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`custom-button ${variant} ${className}`}
      target="_blank"
      {...(download ? { download: true } : {})}
    >
      {children}
    </Link>
  );
};

