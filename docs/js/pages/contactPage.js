import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderContactPage() {
  const app = document.getElementById("app");
  app.innerHTML = renderPageLayout({
    id: "contact",
    title: "Холбоо барих",
    content: `<p>Манай урлантай холбогдох.</p>`,
  });
}