import type { MouseEvent } from "react";

const scrollDelays = [0, 150, 500, 1200];
let hashScrollTimeouts: number[] = [];

function clearHashScrolls() {
  hashScrollTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
  hashScrollTimeouts = [];
}

function scrollToHash(href: string, behavior: ScrollBehavior = "auto") {
  const id = href.replace(/^#/, "");
  const target = document.getElementById(id);

  if (!target) return;

  document.documentElement.scrollLeft = 0;
  document.body.scrollLeft = 0;
  target.scrollIntoView({ behavior, block: "start", inline: "nearest" });
}

function scheduleHashScroll(href: string, behavior: ScrollBehavior) {
  clearHashScrolls();

  hashScrollTimeouts = scrollDelays.map((delay) =>
    window.setTimeout(
      () => scrollToHash(href, delay === 0 ? behavior : "auto"),
      delay,
    ),
  );
}

export function navigateToHash(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (!href.startsWith("#")) return;

  event.preventDefault();
  window.history.pushState(null, "", href);
  scheduleHashScroll(href, "smooth");
}

export function restoreCurrentHash() {
  if (!window.location.hash) return;

  scheduleHashScroll(window.location.hash, "auto");
}
