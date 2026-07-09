import { track as trackVercelEvent } from "@vercel/analytics";

export type PortfolioEventName =
  | "contact_click"
  | "cv_download"
  | "project_case_study_select"
  | "project_repo_click";

export type PortfolioEventProperties = {
  source?: string;
  label?: string;
  project?: string;
  method?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    plausible?: (eventName: string, options?: { props?: PortfolioEventProperties }) => void;
    posthog?: {
      capture?: (eventName: string, properties?: PortfolioEventProperties) => void;
    };
  }
}

export function trackPortfolioEvent(
  eventName: PortfolioEventName,
  properties: PortfolioEventProperties = {},
) {
  if (typeof window === "undefined") return;

  window.dataLayer?.push({ event: eventName, ...properties });
  window.gtag?.("event", eventName, properties);
  window.plausible?.(eventName, { props: properties });
  window.posthog?.capture?.(eventName, properties);
  trackVercelEvent(eventName, properties);

  if (process.env.NODE_ENV !== "production") {
    console.info("[portfolio:event]", eventName, properties);
  }
}
