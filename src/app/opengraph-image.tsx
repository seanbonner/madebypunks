import { ImageResponse } from "next/og";
import { getAllPunks } from "@/data/projects";
import { COLORS } from "@/lib/constants";

export const runtime = "edge";

export const alt = "Made by Punks - CryptoPunks Project Directory";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

function getPunkImageUrl(punkId: number) {
  return `https://punks.art/api/punks/${punkId}?format=png&size=24&background=v2`;
}

export default async function Image() {
  const punkIds = getAllPunks().slice(0, 6);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.punkBlue,
        }}
      >
        {/* Punk avatars */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          {punkIds.map((id) => (
            <div
              key={id}
              style={{
                display: "flex",
                border: "6px solid #000",
                boxShadow: "6px 6px 0 0 #000",
              }}
            >
              <img
                src={getPunkImageUrl(id)}
                width={100}
                height={100}
                style={{
                  imageRendering: "pixelated",
                }}
              />
            </div>
          ))}
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              textShadow: "6px 6px 0 #000",
            }}
          >
            Made by Punks
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginTop: "16px",
              opacity: 0.8,
            }}
          >
            CryptoPunks Project Directory
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
