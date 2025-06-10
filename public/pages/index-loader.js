
async function loadPageSection(id, file) {
  const container = document.getElementById(id);
  if (container) {
    try {
      const res = await fetch(`/pages/${file}`);
      const html = await res.text();
      container.innerHTML = html;
    } catch (err) {
      container.innerHTML = `<div style="color:red;">Failed to load ${file}</div>`;
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  loadPageSection("header-section", "index-header.html");
  loadPageSection("dashboard-section", "index-dashboard.html");
  loadPageSection("create-section", "index-create.html");
  loadPageSection("ai-section", "index-ai.html");
  loadPageSection("upgrade-section", "index-upgrade.html");
  loadPageSection("contact-section", "index-contact.html");
  loadPageSection("footer-section", "index-footer.html");
  loadPageSection("settings-section", "index-settings.html");
});
