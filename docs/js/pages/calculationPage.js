import { renderPageLayout } from "../layouts/pageLayout.js";
import { t } from "../i18n/i18n.js";

export function renderCalculationPage() {
  const app = document.getElementById("app");
  app.innerHTML = renderPageLayout({
    id: "calculation",
    title: t("calculation.title"),
    content: `<p>Модон эдлэлийн материалын зардал болон хугацааны тооцоолуур.</p>`,
  });
}