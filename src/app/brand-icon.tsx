import { ImageResponse } from "next/og";

type BrandIconOptions = {
  size: {
    width: number;
    height: number;
  };
};

export function createBrandIcon({ size }: BrandIconOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #04110b 0%, #0b2618 54%, #155d35 100%)",
          color: "#f7fff9",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            border: "10px solid rgba(184, 255, 210, 0.28)",
            borderRadius: "30%",
            boxShadow: "0 28px 90px rgba(0, 0, 0, 0.38)",
            display: "flex",
            height: "74%",
            justifyContent: "center",
            width: "74%",
          }}
        >
          <span
            style={{
              color: "#dfffea",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: Math.round(size.width * 0.34),
              fontWeight: 900,
              letterSpacing: "0.02em",
              lineHeight: 1,
            }}
          >
            SM
          </span>
        </div>
      </div>
    ),
    size,
  );
}
