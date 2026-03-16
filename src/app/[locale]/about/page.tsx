import { useTranslations } from "next-intl";

const stack = [
  { name: "Next.js", level: 3 },
  { name: "TypeScript", level: 2 },
  { name: "Tailwind CSS", level: 3 },
  { name: "Canvas API", level: 2 },
  { name: "Git / GitHub", level: 2 },
  { name: "Framer Motion", level: 1 },
];

const learning = ["MDX", "Vitest", "CI/CD", "DNS", "Docker"];

const tags = ["RAP", "DJ", "MÚSICA", "STREET ART", "PRODUTO"];

export default function AboutPage() {
  return (
    <main style={{ padding: "48px 40px", maxWidth: 900 }}>
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
        // quem sou
      </p>
      <h1
        style={{
          fontSize: 32,
          fontWeight: 900,
          color: "var(--text)",
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
          marginBottom: 48,
        }}
      >
        Sobre
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
        }}
      >
        <div>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              border: "2px solid var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "monospace",
              fontSize: 18,
              fontWeight: 900,
              color: "var(--accent)",
              marginBottom: 20,
            }}
          >
            MH
          </div>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 900,
              color: "var(--text)",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              marginBottom: 4,
            }}
          >
            maike.dev
          </h2>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: 9,
              color: "var(--accent)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Dev · Curitiba, BR
          </p>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-muted)",
              lineHeight: 1.8,
              marginBottom: 12,
            }}
          >
            Em transição pra dev com olhar de produto. Venho do universo
            criativo — rap, DJ, música, referências visuais.
          </p>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-muted)",
              lineHeight: 1.8,
              marginBottom: 24,
            }}
          >
            Estudo com o curso.dev e construo em público. Esse site é tanto
            portfólio quanto laboratório.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "monospace",
                  fontSize: 8,
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                  padding: "2px 6px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: 9,
              color: "var(--text-faint)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            // stack atual
          </p>
          <div style={{ marginBottom: 32 }}>
            {stack.map((item) => (
              <div
                key={item.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "8px 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 12,
                    color: "var(--text)",
                    flex: 1,
                  }}
                >
                  {item.name}
                </span>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  {[1, 2, 3, 4].map((dot) => (
                    <div
                      key={dot}
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background:
                          dot <= item.level ? "var(--accent)" : "transparent",
                        border: "1px solid var(--accent)",
                        flexShrink: 0,
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: 9,
              color: "var(--text-faint)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            // aprendendo agora
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {learning.map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: "monospace",
                  fontSize: 9,
                  color: "var(--accent)",
                  border: "1px solid var(--accent)",
                  padding: "2px 6px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {item}
              </span>
            ))}
          </div>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: 10,
              color: "var(--accent)",
              letterSpacing: "0.15em",
              marginTop: 20,
            }}
          >
            ↳ curso.dev em andamento
          </p>
        </div>
      </div>
    </main>
  );
}
