function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element);
  node.classList.add("animated", animationName);

  function handleAnimationEnd() {
    node.classList.remove("animated", animationName);
    node.removeEventListener("animationend", handleAnimationEnd);

    if (typeof callback === "function") callback();
  }

  node.addEventListener("animationend", handleAnimationEnd);
}

animateCSS(".rellax-obj-f1", "fadeInRight");
animateCSS(".rellax-obj-f2", "fadeInLeft");
animateCSS(".rellax-obj-f3", "fadeInRight");
animateCSS(".rellax-obj-f4", "fadeInRight");

var rellax = new Rellax(
  ".rellax-obj-f1,.rellax-obj-f2,.rellax-obj-f3,.rellax-obj-f4"
);
