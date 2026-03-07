"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg-primary text-text-primary">
      <h2 className="text-2xl font-bold">Something went wrong</h2>
      <button
        type="button"
        onClick={reset}
        className="rounded border border-border px-4 py-2 text-text-secondary hover:text-text-primary"
      >
        Try again
      </button>
    </div>
  );
}
