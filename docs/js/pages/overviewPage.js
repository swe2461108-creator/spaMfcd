import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderOverviewPage() {
  const app = document.getElementById("app");
  app.innerHTML = renderPageLayout({
    id: "overview",
    title: "MODON ART - Тойм",
    content: `<p>Манай модон урлалын дэлгүүрт тавтай морил.</p>`,
  });
}