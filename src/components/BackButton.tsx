"use client";

import { useRouter } from "next/navigation";

interface BackButtonProps {
  fallback?: string;
  className?: string;
}

export function BackButton({
  fallback = "/",
  className = "",
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`inline-flex items-center gap-2 text-base font-bold uppercase tracking-wider text-white/80 transition-colors hover:text-white ${className}`}
    >
      ← Back
    </button>
  );
}
