let start = document.querySelector("#start");
let stop = document.querySelector("#stop");

let random_color = function () {
  let hex = "0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let start_genarating;

if (!start_genarating) {
  start.addEventListener("click", function (e) {
    start_genarating = setInterval(function () {
      document.querySelector("body").style.backgroundColor = random_color();
    }, 500);
  });
}

stop.addEventListener("click", function (e) {
  clearInterval(start_genarating);
  start_genarating = null;
});

// console.log(random_color());
