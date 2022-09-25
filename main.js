import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.from(".hero", 0.5, { xPercent: 500, opacity: 0, ease: "power1.out" });

const contactbuttons = document.querySelectorAll(".contactbutton");
contactbuttons.forEach(function (currentButton) {
  currentButton.addEventListener("click", toContactScroll);
});
function toContactScroll() {
  gsap.to(window, { duration: 0.5, scrollTo: "#contact" });
}

let cardtl = gsap.timeline({
  scrollTrigger: {
    trigger: ".cardsbox",
    start: "top bottom",
  },
});
cardtl.from(".card1", { x: 100, opacity: 0, duration: 0.4 });
cardtl.from(".card2", { x: 100, opacity: 0, duration: 0.4 });
cardtl.from(".card3", { x: 100, opacity: 0, duration: 0.4 });
