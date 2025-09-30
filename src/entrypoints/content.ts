export default defineContentScript({
  matches: ["*://*.forum-3dcenter.org/*"],
  cssInjectionMode: "ui",
  main(ctx) {
    const container = document.createElement("div");
    container.innerHTML = "<p>yolo</p>";
    document.getElementById("vB_Editor_0001")?.replaceWith(container);
  },
});
