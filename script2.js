// ---------- Missatge d'estat ----------
// Substituïm el comptador per un missatge estàtic
document.getElementById("countdown").textContent = "Próximamente...";

// ---------- Cambio de idioma ----------
const texts = {
  es: {
    title: "ESTAMOS CREANDO ALGO ESPECIAL",
    description: "Estamos creando algo especial",
    subtext: "Volveremos muy pronto.",
    comingSoon: "Próximamente..."
  },
  en: {
    title: "WE ARE CREATING SOMETHING SPECIAL",
    description: "We are creating something special",
    subtext: "We'll be back very soon.",
    comingSoon: "Coming soon..."
  }
};

let currentLang = "es";

const btnES = document.getElementById("btnES");
const btnEN = document.getElementById("btnEN");

function setLanguage(lang) {
  currentLang = lang;

  document.getElementById("title").textContent = texts[lang].title;
  document.getElementById("description").textContent = texts[lang].description;
  document.getElementById("subtext").textContent = texts[lang].subtext;
  
  // Actualitzem també el missatge de "Próximamente"
  document.getElementById("countdown").textContent = texts[lang].comingSoon;

  // Actualiza estilo de botones
  if (lang === "es") {
    btnES.classList.add("active");
    btnEN.classList.remove("active");
  } else {
    btnEN.classList.add("active");
    btnES.classList.remove("active");
  }
}

// Eventos
btnES.addEventListener("click", () => setLanguage("es"));
btnEN.addEventListener("click", () => setLanguage("en"));
