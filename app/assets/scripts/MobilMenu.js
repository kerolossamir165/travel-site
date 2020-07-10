import $ from "jquery";
class MobelMenu {
  constructor() {
    this.menuIcon = $(".site-header__menu-icon");
    this.siteHeader = $(".site-header");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  events() {
    this.menuIcon.on("click", () => this.toggle());
  }

  toggle() {
    this.menuContent.toggleClass("site-header__menu-content-visible");
    this.siteHeader.toggleClass("site-header-is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon-hamburger");
  }
}

export default MobelMenu;
