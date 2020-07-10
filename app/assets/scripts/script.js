import $ from "jquery";
import MobelMenu from "./MobilMenu";
import Reveal from "./RevealScroll";

let myMenu = new MobelMenu();
// let reveal = new Reveal();
// myMenu.events();
// reveal.show();
new Reveal($(".feature-item"), "85%");
new Reveal($(".testmonials"), "60%");
