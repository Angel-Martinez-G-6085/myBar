import "./header.scss";
import HEADER from "./header.html";

export const loadHeader = () => {
  const mainContainer = document.querySelector(".main-container");
  mainContainer.innerHTML = HEADER;
};