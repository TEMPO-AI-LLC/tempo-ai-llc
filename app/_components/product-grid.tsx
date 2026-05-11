"use client";

import type { PointerEvent } from "react";

type Product = {
  index: string;
  name: string;
  description: string;
  href: string;
  domain: string;
};

const products: Product[] = [
  {
    index: "01",
    name: "LOVALINGO",
    description: "Translation tool",
    href: "https://lovalingo.com",
    domain: "lovalingo.com",
  },
  {
    index: "02",
    name: "ELSON AI",
    description: "Local-first macOS voice assistant",
    href: "https://github.com/TEMPO-AI-LLC/elson.ai",
    domain: "github.com/TEMPO-AI-LLC/elson.ai",
  },
];

function updatePointerVars(event: PointerEvent<HTMLAnchorElement>) {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  target.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
  target.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
}

function clearPointerVars(event: PointerEvent<HTMLAnchorElement>) {
  const target = event.currentTarget;
  target.style.removeProperty("--pointer-x");
  target.style.removeProperty("--pointer-y");
}

export function ProductGrid() {
  return (
    <section className="products" aria-labelledby="products-title">
      <div className="section-heading">
        <span id="products-title">PRODUCTS</span>
        <span>02</span>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <a
            className="product-card"
            href={product.href}
            key={product.name}
            onPointerLeave={clearPointerVars}
            onPointerMove={updatePointerVars}
            rel="noopener"
            target="_blank"
          >
            <span className="product-index">{product.index}</span>
            <span className="product-name">{product.name}</span>
            <span className="product-description">{product.description}</span>
            <span className="product-domain">{product.domain}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
