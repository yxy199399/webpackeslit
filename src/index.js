import "./css/index.css";
import avatar from "./assets/avatar.jpg";
const a = 111
console.log(a)
const app = document.getElementById("app");
const h1 = document.createElement("h1");
app.innerHTML = `<h1>Hello, word!!!</h1><img src='${avatar}' />`;
