let img = document.querySelectorAll(".img");
let build = document.querySelector(".builder");
let icons = document.querySelectorAll("i");
let deg = -5;
let countClicks = 0;
let imgData = null;
// let s = 0;
// to zoom element
img.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    if (e.target.classList.contains("img")) {
      if (countClicks < 3) {
        if (!e.target.classList.contains("open")) {
          e.target.classList.toggle("open");
        }
        if (countClicks < 2) {
          imgData = e.target;
        }
        countClicks++;
      } else {
        // console.log(imgData,imgData.children[0].classList[1], e.target.children[0].classList[1]);
        if (
          imgData.children[0].classList[1] !== e.target.children[0].classList[1]
        ) {
          e.target.classList.toggle("open");
          imgData.classList.toggle("open");
        }
        countClicks = 0;
        imgData = null;
      }
    }
  });
});
// to zoom out element if use click in icon
// icons.forEach((e) => {
//   e.addEventListener("click", (e) => {
//     e.target.parentElement.classList.toggle( "active" );
//     countClicks++
//   });
// });

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    deg += 90;
  }
  if (e.key === "ArrowLeft") {
    deg -= 90;
  }
  build.style.transform = `translate(-50%, -50%)  rotateX(-5deg) rotateY(${deg}deg)`;
});
