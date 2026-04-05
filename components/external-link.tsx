import Link from "next/link";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </Link>
  );
}
