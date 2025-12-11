"use client";

import Script from "next/script";

export default function InstaProfileEmbed() {
  return (
    <>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/eyeladyskateboards/?utm_source=ig_embed&utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: 0,
          width: "calc(100% - 2px)",
        }}
      >
        <div style={{ padding: "16px" }}>
          <a
            href="https://www.instagram.com/eyeladyskateboards/?utm_source=ig_embed&utm_campaign=loading"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#FFFFFF",
              lineHeight: 0,
              padding: 0,
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "50%",
                  height: "40px",
                  width: "40px",
                  marginRight: "14px",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "4px",
                    height: "14px",
                    marginBottom: "6px",
                    width: "100px",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "4px",
                    height: "14px",
                    width: "60px",
                  }}
                />
              </div>
            </div>
          </a>
          <p style={{ color: "#c9c8cd", fontFamily: "Arial,sans-serif", fontSize: "14px", lineHeight: "17px", textAlign: "center", marginTop: "8px", marginBottom: 0 }}>
            @<a
              href="https://www.instagram.com/eyeladyskateboards/?utm_source=ig_embed&utm_campaign=loading"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c9c8cd", textDecoration: "none" }}
            >
              eyeladyskateboards
            </a> • Instagram photos and videos
          </p>
        </div>
      </blockquote>

      <Script src="//www.instagram.com/embed.js" strategy="lazyOnload" />
    </>
  );
}

