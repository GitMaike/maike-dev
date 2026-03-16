"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { CosmosCanvas } from "./cosmos-canvas";

const CHARS = "!@#$%*\\/|_+~^?0123456789ABCDEF";

function useScramble(target: string) {
  const [text, setText] = useState(target);
  const running = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const scramble = () => {
    if (running.current) return;
    running.current = true;
    timers.current.forEach(clearTimeout);
    timers.current = [];
    const steps = target.length * 5;
    let step = 0;

    const tick = () => {
      step++;
      const result = target
        .split("")
        .map((c, i) => {
          const revealAt = Math.floor((steps * (i + 1)) / target.length);
          if (step >= revealAt) return c;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");
      setText(result);
      if (step < steps) {
        const t = setTimeout(tick, 80);
        timers.current.push(t);
      } else {
        setText(target);
        running.current = false;
      }
    };
    tick();
  };

  const reset = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    running.current = false;
    setText(target);
  };

  return { text, scramble, reset };
}

export function Hero() {
  const t = useTranslations("hero");
  const maike = useScramble("maike");
  const dev = useScramble("dev");

  const handleEnter = () => {
    maike.scramble();
    dev.scramble();
  };

  const handleLeave = () => {
    maike.reset();
    dev.reset();
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "calc(100vh - 57px)",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      <CosmosCanvas />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: "60px 40px 0",
        }}
      >
        <p
          style={{
            fontFamily: "monospace",
            fontSize: 9,
            color: "var(--text-faint)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              display: "block",
              width: 20,
              height: 1,
              background: "var(--text-faint)",
            }}
          />
          {t("label")}
        </p>

        <div
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          style={{
            display: "inline-flex",
            alignItems: "baseline",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <span
            style={{
              fontSize: 80,
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
              textTransform: "lowercase",
              color: "transparent",
              WebkitTextStroke: "1.5px var(--text)",
            }}
          >
            {maike.text}
          </span>
          <span
            style={{
              fontSize: 80,
              fontWeight: 900,
              lineHeight: 0.88,
              color: "transparent",
              WebkitTextStroke: "1.5px var(--accent)",
            }}
          >
            .
          </span>
          <span
            style={{
              fontSize: 80,
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
              textTransform: "lowercase",
              color: "transparent",
              WebkitTextStroke: "1.5px var(--text)",
            }}
          >
            {dev.text}
          </span>
        </div>

        <div
          style={{
            width: "100%",
            height: 1,
            background: "#1c1c26",
            margin: "24px 0 20px",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              right: 0,
              top: -5,
              fontSize: 7,
              color: "#c8a84b",
            }}
          >
            ◆
          </span>
        </div>

        <p
          style={{
            fontFamily: "monospace",
            fontSize: 11,
            color: "var(--text-muted)",
            letterSpacing: "0.06em",
            lineHeight: 2,
            whiteSpace: "pre-line",
          }}
        >
          {t("tagline")}
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
          <button
            style={{
              background: "#c8a84b",
              color: "#08090e",
              fontFamily: "monospace",
              fontSize: 9,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "10px 22px",
              border: "none",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            {t("cta_projects")}
          </button>
          <button
            style={{
              background: "transparent",
              color: "var(--text-muted)",
              fontFamily: "monospace",
              fontSize: 9,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "10px 22px",
              border: "1px solid #1c1c26",
              cursor: "pointer",
            }}
          >
            {t("cta_contact")}
          </button>
        </div>

        <p
          style={{
            position: "absolute",
            bottom: 24,
            right: 40,
            fontFamily: "monospace",
            fontSize: 8,
            color: "var(--text-faint)",
            letterSpacing: "0.1em",
          }}
        >
          25.4284°S · 49.2733°W
        </p>
      </div>
    </section>
  );
}
