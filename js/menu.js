import gsap from "gsap";
import disableScroll from "disable-scroll";

let button = document.getElementById("pencet");
let menu = document.getElementsByClassName("menu");
let blacker = document.getElementById("blacker");
let spans = document.querySelectorAll("span");
window.addEventListener("scroll", () => {
  
  if (window.scrollY >= 890) {
    spans.forEach((s) => (s.style.backgroundColor = "black"));
  } else {
    spans.forEach((s) => (s.style.backgroundColor = "white"));
  }
});
button.addEventListener("click", menuToggle, false);

document.addEventListener("click", (e) => {
  let target = e.target;
  let its_menu = target == menu[0] || menu[0].contains(target);
  let menu_is_active = menu[0].classList.contains("opened");
  if (!its_menu && menu_is_active) {
    gsap.to(menu, {
      duration: 1,
      x: 300,
      ease: "bounce.out",
    });
    gsap.to(blacker, {
      duration: 0.3,
      display: "none",
      opacity: 0,
      ease: "ease",
    });
    button.classList.remove("Diam");
    disableScroll.off();
    menu[0].classList.add("closed");
    menu[0].classList.remove("opened");
  }
});

function menuToggle(e) {
    
  e.stopPropagation();
  button.classList.toggle("Diam");
 
  if (menu[0].className === "menu" || menu[0].className === "menu closed") {
    gsap.to(spans, {
        duration: 0.1,
        backgroundColor: 'white',
        ease: 'elastic'
    })
    gsap.to(menu, {
      duration: 1,
      x: -300,
      ease: "bounce.out",
    });
    gsap.to(blacker, {
      duration: 0.3,
      display: "block",
      opacity: 0.5,
      ease: "ease",
    });
    
    disableScroll.on();
    menu[0].classList.add("opened");
    menu[0].classList.remove("closed");
  } else if (menu[0].className === "menu opened") {
    gsap.to(menu, {
      duration: 1,
      x: 300,
      ease: "bounce.out",
    });
    gsap.to(blacker, {
      duration: 0.3,
      display: "none",
      opacity: 0,
      ease: "ease",
    });
    disableScroll.off();
    menu[0].classList.add("closed");
    menu[0].classList.remove("opened");
  }
}
