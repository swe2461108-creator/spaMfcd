import { getCrafts } from "../services/craftService.js";
import { renderSidebarPageLayout } from "../layouts/sidebarPageLayout.js";
import { renderPageLayout } from "../layouts/pageLayout.js";
import { renderNotification } from "../layouts/notificationLayout.js";
import { t } from "../i18n/i18n.js";

export async function renderSearchPage() {
  const app = document.getElementById("app");
  app.innerHTML = renderPageLayout({
    content: renderNotification(t("notification.loadingData")),
  });
  try {
    const craftData = await getCrafts();
    app.innerHTML = renderSidebarPageLayout({
      pageId: "search",
      pageTitle: t("searchPage.title"),
      mainContent: `<div id="resultTbl"><p>Бүтээгдэхүүний жагсаалт: ${craftData.length}</p></div>`,
    });
  } catch (error) {
    app.innerHTML = renderPageLayout({
      content: renderNotification(t("notification.failedToLoadData"), "danger"),
    });
    console.error(error);
  }
}