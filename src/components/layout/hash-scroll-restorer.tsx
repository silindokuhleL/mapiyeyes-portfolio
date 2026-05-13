"use client";

import { useEffect } from "react";
import { restoreCurrentHash } from "@/lib/hash-navigation";

export function HashScrollRestorer() {
  useEffect(() => {
    restoreCurrentHash();
    window.addEventListener("hashchange", restoreCurrentHash);

    return () => {
      window.removeEventListener("hashchange", restoreCurrentHash);
    };
  }, []);

  return null;
}
