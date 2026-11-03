import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderBooksPage() {
  const app = document.getElementById("app");
  app.innerHTML = renderPageLayout({
    id: "books",
    title: "Бүтээлийн каталог",
    content: `<p>Каталогийн жагсаалт.</p>`,
  });
}