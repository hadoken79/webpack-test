import "./main.scss";
import foo from "./bar";
import "@fortawesome/fontawesome-free/js/all.js"; //via js weil loader für scss/css nicht funktioniert

foo();

let i = document.querySelector(".tt");
let icon = document.createElement("div");

icon.innerHTML = '<i class="fab fa-adn"></i>';
i.appendChild(icon);
