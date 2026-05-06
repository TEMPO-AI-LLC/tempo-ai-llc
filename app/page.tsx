import { ProductGrid } from "./_components/product-grid";

const linkedInUrl = "https://www.linkedin.com/in/charlesperret/";

export default function Home() {
  return (
    <main className="site-shell">
      <div className="motion-field" aria-hidden="true" />

      <header className="site-header" aria-label="TEMPO AI">
        <a className="brand" href="." aria-label="TEMPO AI home">
          <span className="brand-tempo">TEMPO</span>
          <span className="brand-ai">AI</span>
        </a>

        <a className="text-link header-link" href={linkedInUrl} rel="noopener">
          CONTACT
        </a>
      </header>

      <section className="intro" aria-labelledby="intro-title">
        <h1 id="intro-title">AI products that help teams scale faster.</h1>
      </section>

      <ProductGrid />

      <footer className="site-footer">
        <span>© 2026 TEMPO AI</span>
        <a className="text-link" href={linkedInUrl} rel="noopener">
          CONTACT
        </a>
      </footer>
    </main>
  );
}
