import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  icon?: "arrow" | "send" | "none";
  className?: string;
};

const variantClasses = {
  primary:
    "bg-terracotta text-white border-terracotta hover:bg-muted-red hover:border-muted-red",
  secondary:
    "bg-parchment/70 text-charcoal border-bronze/35 hover:border-terracotta hover:text-terracotta",
  dark: "bg-indigo text-white border-indigo hover:bg-charcoal hover:border-charcoal"
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  icon = "arrow",
  className = ""
}: LinkButtonProps) {
  const Icon = icon === "send" ? Send : ArrowRight;
  return (
    <Link
      href={href}
      className={
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border px-5 py-3 text-sm font-semibold tracking-[0.08em] transition " +
        variantClasses[variant] +
        " " +
        className
      }
    >
      <span>{children}</span>
      {icon !== "none" ? <Icon aria-hidden="true" className="size-4" /> : null}
    </Link>
  );
}
