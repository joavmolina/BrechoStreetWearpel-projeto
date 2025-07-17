let prevbutton = document.getElementById("prev");
let nextbutton = document.getElementById("next");
let container = document.querySelector(".container");
let items = container.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicators");
let dots = indicator.querySelectorAll("ul li");
let list = container .querySelector('.list')

let active = 0;
let firstPosition = 0;
let LastPosition = items.length - 1;

function setSlider() {

  let itemOld = container.querySelector(".list .item.active");
  itemOld.classList.remove("active");

  let dotsOld = indicator.querySelector("ul li.active");
  dotsOld.classList.remove("active");
  dots[active].classList.add("active");

  indicator.querySelector(".number").innerHTML = "0" + (active + 1);
}
nextbutton.onclick = () => {
    list.style.setProperty('--calcutation', 1)
  active = active + 1 > LastPosition ? 0 : active + 1;
  setSlider()
  items[active].classList.add("active");
};
prevbutton.onclick = () => {
    list.style.setProperty('--calcutation', -1)
  active = active - 1 < firstPosition ? LastPosition : active - 1;
  setSlider()
  items[active].classList.add("active");
};
