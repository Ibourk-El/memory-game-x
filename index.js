let img = document.querySelectorAll(".img");
let build = document.querySelector(".builder");
let icons = document.querySelectorAll("i");
let strBtn = document.getElementById("start-btn");
let box = document.querySelectorAll(".container");
let deg = -5;
let countClicks = 0;
let imgData = [];

img.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    // if user click on the img
    if (!e.target.classList.contains("img")) {
      e.target.parentElement.classList.toggle("active");
    }
    // normal click
    if (e.target.classList.contains("active")) {
      if (imgData.length < 2) {
        e.target.classList.toggle("open");
        imgData.push(e.target);
      } else {
        // to check if windows has the same value
        if (
          imgData[0].children[0].classList[1] !==
          imgData[1].children[0].classList[1]
        ) {
          imgData[0].classList.toggle("open");
          imgData[1].classList.toggle("open");
        } else {
          showIcons(
            imgData[0].children[0].className,
            imgData[1].children[0].className
          );
        }
        // reset datas
        imgData = [];
        e.target.classList.toggle("open");
        imgData = [e.target];
      }
    }
  });
});
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    deg += 90;
  }
  if (e.key === "ArrowLeft") {
    deg -= 90;
  }
  build.style.transform = `translate(-50%)  rotateX(-5deg) rotateY(${deg}deg)`;
});

// function clickMousePsition (x,y)
// {
//   window.scrollTo(x,y)
//   let zoomBody=setInterval(() =>{
//         document.body.style.zoom="300%"
//       }, 1 )
//       setTimeout(() => {
//         clearInterval( zoomBody )
//         document.body.style.zoom="100%"
//       }, 1000);
// }
strBtn.addEventListener("click", () => {
  let num = parseInt(document.getElementById("input-num").value);
  let playPage = document.querySelector(".play-page");
  if (num !== 0) {
    for (let j = 0; j < box.length; j++) {
      for (let i = num; i < 9; i++) {
        box[j].children[i].style.display = "none";
      }
    }
    playPage.style.display = "none";
  }
});

async function showIcons(icon1, icon2) {
  document.querySelector(".show-img-box").style.display = "flex";
  let showIcon = document.querySelectorAll(".show-img i");
  let tr = setInterval(() => {
    showIcon[0].className = icon1;
    showIcon[1].className = icon2;
  }, 0);
  setTimeout(() => {
    clearInterval(tr);
    document.querySelector(".show-img-box").style.display = "none";
  }, 2000);
}
