import $ from "jquery";
import waypoints from "../../../node_modules/waypoints/lib/noframework.waypoints";

class Darknav {
  constructor() {
    this.siteheader = $(".site-header");
    this.trigger = $(".large-hero__title");
    this.darkNav();
  }

  darkNav() {
    let that = this;
    new Waypoint({
      element: this.trigger[0],
      handler: function (direction) {
        if (direction === "down") {
          that.siteheader.addClass("site-header-dark");
        } else {
          that.siteheader.removeClass("site-header-dark");
        }
      },
    });
  }
}

export default Darknav;
