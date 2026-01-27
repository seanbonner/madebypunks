import { ImageResponse } from "next/og";
import { getPunkById } from "@/data/projects";
import { COLORS } from "@/lib/constants";

export const runtime = "edge";

export const alt = "Made by Punks";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

function getPunkImageUrl(punkId: number) {
  return `https://punks.art/api/punks/${punkId}?format=png&size=24&background=v2`;
}

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const punkId = parseInt(id, 10);
  const punk = getPunkById(punkId);

  if (!punk) {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.punkBlue,
            color: "white",
            fontSize: 64,
            fontWeight: 900,
            textTransform: "uppercase",
          }}
        >
          Punk Not Found
        </div>
      ),
      size
    );
  }

  const name = punk.name || `Punk #${punkId}`;

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
        {/* Punk avatar */}
        <div
          style={{
            display: "flex",
            border: "8px solid #000",
            boxShadow: "8px 8px 0 0 #000",
            marginBottom: "40px",
          }}
        >
          <img
            src={getPunkImageUrl(punkId)}
            width={200}
            height={200}
            style={{
              imageRendering: "pixelated",
            }}
          />
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
              fontSize: 64,
              fontWeight: 900,
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              textShadow: "4px 4px 0 #000",
            }}
          >
            {name}
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
            {punk.projects.length} project
            {punk.projects.length !== 1 ? "s" : ""} • Made by Punks
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
