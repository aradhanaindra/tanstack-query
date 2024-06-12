'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "../lib/utils";

type DemoLinkProps = {
  href: string
  children: ReactNode;
}
const DemoLink = ({ href, children }: DemoLinkProps) => {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={cn(
        "block px-3 py-1 text-sm text-white border rounded-full border-neutral-800 hover:bg-neutral-800 transition-color duration-200",
        (pathname === href) && "bg-neutral-800"
      )}
    >
      {children}
    </Link>
  );
}

export default DemoLink;