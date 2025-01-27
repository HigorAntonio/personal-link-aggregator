const switchButton = document.querySelector(".switch");
const switchButtonHandle = switchButton?.querySelector(".handle");
const themeElements = document.querySelectorAll("[data-theme-element]");

const setLightTheme = () => {
  switchButtonHandle.style.transform = "translateX(16px)";

  themeElements.forEach((element) => {
    element.classList.remove("dark-theme");
    element.classList.add("light-theme");
  });

  localStorage.setItem("theme", "light");
};

const setDarkTheme = () => {
  switchButtonHandle.style.transform = "translateX(-16px)";

  themeElements.forEach((element) => {
    element.classList.remove("light-theme");
    element.classList.add("dark-theme");
  });

  localStorage.setItem("theme", "dark");
};

(() => {
  const theme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark");
  if (theme === "light") {
    setLightTheme();
  } else if (theme === "dark") {
    setDarkTheme();
  }
})();

switchButton.addEventListener("click", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    setDarkTheme();
  } else if (theme === "dark") {
    setLightTheme();
  }
});
