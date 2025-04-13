import { DrawSVGPlugin } from "~/plugins/DrawSVGPlugin.js"; // Adjust the path if necessary
import gsap from "gsap";

// Register the plugin
gsap.registerPlugin(DrawSVGPlugin);

export default {
  mounted(el) {
    let svgElems = el.querySelectorAll(".draw-me");

    if (!svgElems || !svgElems.length) {
      return;
    }

    let reversed = el.dataset.reversed;
    let stagger = el.dataset.stagger || 0.1;
    let delay = el.dataset.delay;

    let from = reversed ? "100% 100%" : "0%";
    let to = reversed ? "0% 100%" : "100%";

    if (el.dataset.visible === "true") {
      gsap.fromTo(
        svgElems,
        {
          drawSVG: from,
        },
        {
          duration: 1,
          stagger,
          drawSVG: to,
          delay,
          overwrite: true,
        }
      );
    } else {
      gsap.set(svgElems, { drawSVG: "0%" });
    }
  },
};
