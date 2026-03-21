"use client";

import { useState } from "react";

export function NewsletterSubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setErrorMsg("Email inválido.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao inscrever.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Erro ao inscrever.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          border: "1px solid var(--accent)",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "monospace",
            fontSize: 11,
            color: "var(--accent)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Inscrito!
        </p>
        <p
          style={{
            fontSize: 13,
            color: "var(--text-muted)",
            lineHeight: 1.6,
          }}
        >
          Você vai receber a próxima edição da maike.dev weekly no seu email.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        border: "1px solid var(--border)",
        padding: "24px",
      }}
    >
      <p
        style={{
          fontFamily: "monospace",
          fontSize: 9,
          color: "var(--text-faint)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        // newsletter
      </p>

      <h3
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: "var(--text)",
          textTransform: "uppercase",
          letterSpacing: "-0.01em",
          marginBottom: 8,
        }}
      >
        maike.dev weekly
      </h3>

      <p
        style={{
          fontSize: 12,
          color: "var(--text-muted)",
          lineHeight: 1.6,
          marginBottom: 16,
        }}
      >
        Tech, música e cultura — curadoria semanal com tom autoral. Direto no
        seu email.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: 8,
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          required
          style={{
            flex: 1,
            fontFamily: "monospace",
            fontSize: 12,
            color: "var(--text)",
            background: "transparent",
            border: "1px solid var(--border)",
            padding: "8px 12px",
            outline: "none",
            letterSpacing: "0.04em",
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            fontFamily: "monospace",
            fontSize: 10,
            color: "#08090e",
            background: "var(--accent)",
            border: "1px solid var(--accent)",
            padding: "8px 16px",
            cursor: status === "loading" ? "wait" : "pointer",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 700,
            opacity: status === "loading" ? 0.6 : 1,
            whiteSpace: "nowrap",
          }}
        >
          {status === "loading" ? "..." : "Inscrever"}
        </button>
      </form>

      {status === "error" && (
        <p
          style={{
            fontFamily: "monospace",
            fontSize: 10,
            color: "#ef4444",
            marginTop: 8,
            letterSpacing: "0.04em",
          }}
        >
          {errorMsg}
        </p>
      )}
    </div>
  );
}
