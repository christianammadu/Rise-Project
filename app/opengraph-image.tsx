import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Riseup.com — Your Bridge to Opportunity";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #c084fc 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          color: "white",
          padding: "60px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Glow blobs */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            left: "-150px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            filter: "blur(80px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            right: "-150px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "rgba(251, 191, 36, 0.15)",
            filter: "blur(80px)",
            display: "flex",
          }}
        />

        {/* Content wrapper */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          {/* Logo badge */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "1px",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              marginBottom: "32px",
              display: "flex",
            }}
          >
            🚀 LAUNCHING SOON
          </div>

          {/* Heading */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '20px',
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span>Your Bridge to Opportunity</span>
            <span style={{ color: "#fbbf24", marginTop: "8px" }}>
              Across Europe & Africa
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "24px",
              color: "rgba(255, 255, 255, 0.85)",
              maxWidth: "800px",
              lineHeight: 1.4,
              marginTop: "16px",
              display: "flex",
            }}
          >
            Discover jobs, certifications, events, language resources, and mentorship — everything you need to thrive abroad, in one platform.
          </div>

          {/* Brand tag */}
          <div
            style={{
              marginTop: "48px",
              fontSize: "28px",
              fontWeight: 700,
              color: "white",
              letterSpacing: "0.5px",
              display: "flex",
            }}
          >
            Riseup.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
