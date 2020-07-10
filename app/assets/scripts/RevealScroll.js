import $ from "jquery";
import waypoints from "../../../node_modules/waypoints/lib/noframework.waypoints";
class Reveal {
  constructor(select, offset) {
    this.item = select;
    console.log(select);
    this.lazy = $(".lazyload");
    this.offSet = offset;
    this.hide();
    this.show();
    this.refresh();
  }
  hide() {
    this.item.addClass("reveal");
  }
  show() {
    let that = this;
    this.item.each(function () {
      let currnet = this;
      console.log(currnet);
      new Waypoint({
        element: currnet,
        handler: function () {
          //  $(currnet).addClass("reveal-is-isvisble");
          $(currnet).addClass("reveal-isvisble");
        },
        offset: that.offSet,
      });
    });
  }
  refresh() {
    this.lazy.on("load", function () {
      Waypoint.refreshAll();
    });
  }
}
export default Reveal;
