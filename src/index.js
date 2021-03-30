import './styles.css';
import gallery_item from "./templates/gallery-item.hbs";
import menu from "./menu.json";
console.log(menu);
console.log(gallery_item);

const markup = gallery_item(menu);
console.log(markup);

const refs = {
  input: document.querySelector(".theme-switch__toggle"),
  body: document.querySelector("body"),
  menu: document.querySelector(".js-menu")
};

console.log(refs.menu);

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

refs.input.addEventListener("change", onChangeTheme);
refs.menu.insertAdjacentHTML("afterbegin", markup);

refs.body.classList.add(Theme.LIGHT);
checkTheme();

function checkTheme() {
  if (localStorage.getItem('darkThemeSettings')) {
  refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
  refs.input.checked = true;
} else return
}

function onChangeTheme() {
  if (refs.input.checked) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    console.log(refs.input.checked);

    localStorage.setItem('darkThemeSettings', JSON.stringify(Theme.DARK))
  }
  else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
localStorage.removeItem('darkThemeSettings')
  }
};
