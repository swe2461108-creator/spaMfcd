function renderPage(title, text) {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="box">
      <h2 class="title is-4">${title}</h2>
      <p>${text}</p>
    </div>
  `;
}

export const routes = {
  "#/overview": () => renderPage("Overview", "Welcome to MODON ART."),
  "#/search": () => renderPage("Search", "Browse MODON ART products."),
  "#/calculation": () => renderPage("Calculation", "Custom order price calculator."),
  "#/books": () => renderPage("Catalog", "MODON ART product catalog."),
  "#/contact": () => renderPage("Contact", "Contact MODON ART team."),
  "#/404": () => renderPage("404", "Page not found."),
};