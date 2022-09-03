// Menu
function menu() {
  const menu = document.getElementById("menu");
  const logo = document.getElementById("logo");
  const btnOpen = document.getElementById("open");
  const btnClose = document.getElementById("close");
  btnOpen.addEventListener("click", (e) => {
    const headerHeight = document
      .querySelector(".header")
      .getBoundingClientRect().height;
    menu.style.paddingTop = `${headerHeight + 10}px`;
    document.body.classList.add("toggle");
    logo.setAttribute("src", "images/logo-bookmarkCp.svg");
  });
  btnClose.addEventListener("click", (e) => {
    document.body.classList.remove("toggle");
    logo.setAttribute("src", "images/logo-bookmark.svg");
  });
}
menu();
// Features
function features() {
  const features = document.querySelectorAll(".feature__box");
  const tabs = document.querySelectorAll(".feature__tab-btn");
  const featureCon = document.querySelector(".feature__content");

  features.forEach((feature, i) => {
    feature.setAttribute("data-tab", i);
  });
  tabs.forEach((tab, i) => {
    tab.setAttribute("data-tab", i);
  });

  featureCon.addEventListener("click", (e) => {
    if (!e.target.classList.contains("feature__tab-btn")) return;
    // *************
    const featureBoxHeight = document
      .querySelector(".feature__box--extra")
      .getBoundingClientRect().height;
    document.querySelector(
      ".feature__box"
    ).style.minHeight = `${featureBoxHeight}px`;
    // *****
    tabs.forEach((tab) => {
      tab.classList.toggle("feature__tab-btn--active", tab === e.target);
    });
    features.forEach((f, i) => {
      f.classList.toggle("feature__box--active", e.target.dataset.tab == i);
    });
  });
}
features();
// Questions
function questions() {
  const questions = document.querySelectorAll(".questions__question");
  const questionsList = document.querySelector(".questions__list");
  const questionsArrow = document.querySelectorAll(".questions__arrow");

  questionsArrow.forEach((q) => {
    q.setAttribute("data-src", "images/icon-arrowCp.svg");
  });

  questionsList.addEventListener("click", (e) => {
    if (!e.target.classList.contains("questions__arrow")) return;
    let src = e.target.getAttribute("src"),
      dataSrc = e.target.getAttribute("data-src");
    [src, dataSrc] = [dataSrc, src];

    e.target.src = src;
    e.target.dataset.src = dataSrc;

    document.querySelectorAll(".questions__item").forEach((q) => {
      if (q !== e.target.parentElement) {
        q.classList.remove("active");
        q.querySelector("img").setAttribute("src", "images/icon-arrow.svg");
        q.querySelector("img").setAttribute(
          "data-src",
          "images/icon-arrowCp.svg"
        );
      } else {
        q.classList.toggle("active", !q.classList.contains("active"));
      }
    });
  });
}
questions();
// Form
function form() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("input").value;
    const cta = document.querySelector(".cta");
    const popup = document.querySelector(".popup");
    if (
      input.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      document.querySelector("input").value = "";
      cta.classList.remove("invalid");
      location.href = "form.html";
    } else {
      cta.classList.add("invalid");
    }
  });
}
form();
