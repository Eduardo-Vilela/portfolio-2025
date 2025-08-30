import '@/styles/components/button.css';
import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  download?: boolean;
}

export const Button = ({
  href,
  variant = "primary",
  children,
  className = "",
  download = false,
}: ButtonProps) => {
  // Detectamos enlaces especiales (mailto, tel, http, etc.)
  const isSpecialLink =
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http");

  // 🔹 Si es enlace especial, usar <a>
  if (isSpecialLink) {
    return (
      <a
        href={href}
        className={`custom-button ${variant} ${className}`}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...(download ? { download: true } : {})}
      >
        {children}
      </a>
    );
  }

  // 🔹 Si es navegación interna, usar <Link>
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

