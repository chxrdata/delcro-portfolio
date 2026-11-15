const body = document.body

let isSmallScreen = false;
if (window.innerWidth <= 767) {
    isSmallScreen = true;
}
let isMobile = false;
if (window.matchMedia("(any-hover:none)").matches) {
    isMobile = true;
}
if (!(localStorage.getItem("viewPreference"))) {
    localStorage.setItem("viewPreference", "tree");
};
