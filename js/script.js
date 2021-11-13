// Hamburger menu - changing button

const menuBtn = document.querySelector(".menu-btn");
let activeBtn = false;
menuBtn.addEventListener("click", () => {
  if (!activeBtn) {
    menuBtn.classList.add("open");
    activeBtn = true;
  } else {
    menuBtn.classList.remove("open");
    activeBtn = false;
  }
});

// Show menu in mobile version

const showMenu = (menuBtnId, menuListId) => {
  const toggle = document.getElementById(menuBtnId);
  const nav = document.getElementById(menuListId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open-menu");
    });
  }
};
showMenu("menu-button", "menu");

// Scroll to element

const menuLinks = document.querySelectorAll(".menu-list-link");

menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    let elem = document.getElementById(item.getAttribute("data-link"));
    elem.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
