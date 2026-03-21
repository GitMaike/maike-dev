import { Hero } from "@/components/home/hero";
import { NewsletterSubscribeForm } from "@/components/newsletter/subscribe-form";

export default function Home() {
  return (
    <>
      <Hero />
      <section
        style={{
          padding: "64px 40px",
          maxWidth: 560,
        }}
      >
        <NewsletterSubscribeForm />
      </section>
    </>
  );
}
