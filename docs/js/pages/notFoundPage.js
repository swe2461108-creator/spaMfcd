import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderNotFoundPage() {
  const app = document.getElementById("app");
  app.innerHTML = renderPageLayout({
    id: "notFound",
    title: "404 - Хуудас олдсонгүй",
    content: `<p>Уучлаарай, хайсан хуудас олдсонгүй.</p>`,
  });
}