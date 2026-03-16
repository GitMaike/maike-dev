"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleSubmit = async () => {
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main style={{ padding: "48px 40px", maxWidth: 560 }}>
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
        // fale comigo
      </p>
      <h1
        style={{
          fontSize: 32,
          fontWeight: 900,
          color: "var(--text)",
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
          marginBottom: 16,
        }}
      >
        Contato
      </h1>
      <p
        style={{
          fontSize: 14,
          color: "var(--text-muted)",
          lineHeight: 1.7,
          marginBottom: 48,
        }}
      >
        Se o que você viu aqui fez sentido pra você, me manda uma mensagem.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <label
            style={{
              fontFamily: "monospace",
              fontSize: 9,
              color: "var(--text-faint)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 8,
            }}
          >
            Nome
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={{
              width: "100%",
              background: "transparent",
              border: "1px solid var(--border)",
              padding: "10px 14px",
              color: "var(--text)",
              fontFamily: "monospace",
              fontSize: 13,
              outline: "none",
            }}
          />
        </div>

        <div>
          <label
            style={{
              fontFamily: "monospace",
              fontSize: 9,
              color: "var(--text-faint)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 8,
            }}
          >
            Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={{
              width: "100%",
              background: "transparent",
              border: "1px solid var(--border)",
              padding: "10px 14px",
              color: "var(--text)",
              fontFamily: "monospace",
              fontSize: 13,
              outline: "none",
            }}
          />
        </div>

        <div>
          <label
            style={{
              fontFamily: "monospace",
              fontSize: 9,
              color: "var(--text-faint)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 8,
            }}
          >
            Mensagem
          </label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={6}
            style={{
              width: "100%",
              background: "transparent",
              border: "1px solid var(--border)",
              padding: "10px 14px",
              color: "var(--text)",
              fontFamily: "monospace",
              fontSize: 13,
              outline: "none",
              resize: "vertical",
            }}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={status === "sending"}
          style={{
            background: "var(--accent)",
            color: "#08090e",
            fontFamily: "monospace",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            padding: "12px 24px",
            border: "none",
            cursor: status === "sending" ? "not-allowed" : "pointer",
            fontWeight: 700,
            alignSelf: "flex-start",
            opacity: status === "sending" ? 0.6 : 1,
          }}
        >
          {status === "sending" ? "Enviando..." : "Enviar →"}
        </button>

        {status === "success" && (
          <p
            style={{
              fontFamily: "monospace",
              fontSize: 11,
              color: "var(--accent)",
              letterSpacing: "0.1em",
            }}
          >
            ✓ Mensagem enviada com sucesso.
          </p>
        )}

        {status === "error" && (
          <p
            style={{
              fontFamily: "monospace",
              fontSize: 11,
              color: "#e24b4a",
              letterSpacing: "0.1em",
            }}
          >
            ✗ Erro ao enviar. Tenta novamente.
          </p>
        )}
      </div>
    </main>
  );
}
