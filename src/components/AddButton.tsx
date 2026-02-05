"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const GITHUB_NEW_PROJECT_URL =
  "https://github.com/seanbonner/madebypunks/new/main/content/projects";

export function AddButton() {
  const pathname = usePathname();
  const isOnAddPage = pathname === "/add";

  const href = isOnAddPage ? GITHUB_NEW_PROJECT_URL : "/add";
  const isExternal = isOnAddPage;

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex items-center justify-center w-9 h-9 text-xl font-bold text-punk-pink hover:text-punk-blue transition-colors"
      title={isOnAddPage ? "Add project on GitHub" : "Share your work"}
    >
      +
    </Link>
  );
}
