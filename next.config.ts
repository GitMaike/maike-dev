import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "**": ["./src/content/**/*"],
  },
};

export default withNextIntl(nextConfig);
