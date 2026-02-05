import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { SearchOverlay } from "./SearchOverlay";
import { AddButton } from "./AddButton";
import { getSearchData } from "@/data/punks";

export function Header() {
  const searchItems = getSearchData();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground/10 bg-background backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold uppercase tracking-wider font-pixel">
            {SITE_NAME}
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <SearchOverlay items={searchItems} />
          <AddButton />
        </nav>
      </div>
    </header>
  );
}
