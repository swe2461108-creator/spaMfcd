import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderCalculationPage() {
  const app = document.getElementById("app");
  app.innerHTML = renderPageLayout({
    id: "calculation",
    title: "Үнэ тооцоолуур",
    content: `<p>Захиалгын үнийн тооцоолол.</p>`,
  });
}