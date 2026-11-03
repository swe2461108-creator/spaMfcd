import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderSearchPage() {
  const app = document.getElementById("app");
  app.innerHTML = renderPageLayout({
    id: "search",
    title: "Бүтээгдэхүүн хайх",
    content: `<p>Бүтээгдэхүүний хайлт хэсэг.</p>`,
  });
}