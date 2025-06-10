async function loadPageSection(id, file) {
  const container = document.getElementById(id);
  if (container) {
    try {
      console.log(`Loading ${file} into #${id}`);
      const res = await fetch(`/pages/${file}`);
      if (!res.ok) throw new Error(`Failed to load ${file}`);
      const html = await res.text();
      container.innerHTML = html;
    } catch (err) {
      container.innerHTML = `<div style="color:red;">❌ Failed to load ${file}</div>`;
      console.error(err);
    }
  }
}
