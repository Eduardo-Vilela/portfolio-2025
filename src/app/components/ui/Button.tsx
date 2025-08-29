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
  const isSpecialLink =
    href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http');

  if (isSpecialLink) {
    // 🔹 Usa <a> nativo para mailto:, tel:, y URLs externas
    return (
      <a
        href={href}
        className={`custom-button ${variant} ${className}`}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...(download ? { download: true } : {})}
      >
        {children}
      </a>
    );
  }

  // 🔹 Usa Link solo para rutas internas
  return (
    <Link
      href={href}
      className={`custom-button ${variant} ${className}`}
      {...(download ? { download: true } : {})}
    >
      {children}
    </Link>
  );
};

