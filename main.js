import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const body = document.querySelector("body");

gsap.from(".contact-content", 0.5, {
  opacity: 0,
  delay: 0.5,
  xPercent: 100,
  scrollTrigger: {
    trigger: "#contact",
    start: "top bottom",
  },
});

gsap.from(".heroimage", 0.5, {
  opacity: 0,
  xPercent: 100,
});

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
cardtl.from(".card1", { xPercent: -100, opacity: 0, duration: 0.5 });
cardtl.from(".card2", { xPercent: -100, opacity: 0, duration: 0.5 });
cardtl.from(".card3", { xPercent: -100, opacity: 0, duration: 0.5 });
