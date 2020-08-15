var divs = document.querySelectorAll("div");
var mybtn = document.getElementById("mybtn");
var div1 = document.getElementById("div1");

function eachcircle(j, i, color) {
  divs[j].setAttribute("data", divs[j].textContent);

  var traffic = setInterval(function circle() {
    divs[j].classList.remove("default");
    divs[j].classList.add(color);
    divs[j].textContent = i;
    i--;
    if (i < 0) {
      divs[j].classList.remove(color);
      divs[j].classList.add("default");
      divs[j].textContent = divs[j].getAttribute("data");
      clearInterval(traffic);
    }
  }, 1000);
}

mybtn.onclick = function circle1() {
  eachcircle(0, 6, "red");
};
function circle2() {
  eachcircle(1, 10, "yellow");
}
function circle3() {
  eachcircle(2, 7, "green");
}
