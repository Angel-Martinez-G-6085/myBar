import "./header.scss";
import HEADER from "./header.html";
import PATHS from "../../router/routes";
import { matchPath } from "../../utils/matchPath";

export const loadHeader = () => {
  const mainContainer = document.querySelector(".main-container");
  mainContainer.innerHTML = HEADER;
  logoEvent();
};

const logoEvent = () => {
  const paths = PATHS;
  const logo = document.querySelector(".icon");
  logo.addEventListener("click", matchPath("/",paths));
}