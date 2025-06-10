<!-- Loader Script to Inject Modular Pages -->
<script>
  async function loadPageSection(id, file) {
    const container = document.getElementById(id);
    if (container) {
      const res = await fetch(file);
      const html = await res.text();
      container.innerHTML = html;
    }
  }

  window.addEventListener("DOMContentLoaded", () => {
    loadPageSection("header-section", "pages/index-header.html");
    loadPageSection("dashboard-section", "pages/index-dashboard.html");
    loadPageSection("create-section", "pages/index-create.html");
    loadPageSection("ai-section", "pages/index-ai.html");
    loadPageSection("upgrade-section", "pages/index-upgrade.html");
    loadPageSection("contact-section", "pages/index-contact.html");
    loadPageSection("footer-section", "pages/index-footer.html");
    loadPageSection("settings-section", "pages/index-settings.html");
  });
</script>
