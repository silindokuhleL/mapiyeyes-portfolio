import { ImageResponse } from "next/og";
import { siteMetadata } from "@/data/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #050b08 0%, #0b1f16 52%, #123b25 100%)",
          color: "#f7fff9",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: "68px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-120px",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background: "rgba(62,226,127,0.16)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "-80px",
            bottom: "-140px",
            width: "360px",
            height: "360px",
            borderRadius: "999px",
            background: "rgba(62,226,127,0.12)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(217,255,231,0.18)",
            borderRadius: "34px",
            padding: "56px",
            background: "rgba(255,255,255,0.055)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                color: "#a7f3d0",
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "999px",
                  background: "#3ee27f",
                  display: "flex",
                }}
              />
              Available for freelance SaaS work
            </div>
            <div
              style={{
                fontSize: "72px",
                lineHeight: 1.02,
                fontWeight: 800,
                maxWidth: "880px",
              }}
            >
              {siteMetadata.shortName}
            </div>
            <div
              style={{
                fontSize: "38px",
                lineHeight: 1.16,
                color: "#ddfbe7",
                maxWidth: "920px",
              }}
            >
              Laravel and Next.js SaaS platforms, APIs, RBAC, payments,
              dashboards, and cloud deployment.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#c9f7d8",
              fontSize: "26px",
              fontWeight: 700,
            }}
          >
            <span>{siteMetadata.role}</span>
            <span>mapiyeyes-portfolio.vercel.app</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
