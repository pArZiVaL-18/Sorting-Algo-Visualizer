let generate_array_btn = document.getElementById("array");
let start = document.getElementById("start");
let again = document.getElementById("again");

let bar_container = document.getElementById("bar-container");
let box_container = document.getElementById("box-container");
let container = document.querySelector(".container");

const btn_container = document.querySelector(".btn-container");
const btn = document.querySelectorAll(".btn-1");

const bigo = document.querySelector(".best");
const omega = document.querySelector(".avg");
const theta = document.querySelector(".worst");

const dot_1 = document.querySelector(".dot-1");
const dot_2 = document.querySelector(".dot-2");
const dot_3 = document.querySelector(".dot-3");
const status_1 = document.querySelector(".status-1");
const status_2 = document.querySelector(".status-2");
const status_3 = document.querySelector(".status-3");

const para = document.querySelector(".para");
const para_2 = document.querySelector(".para-2");

const switch_btn = document.getElementById("switch-btn");
const input_array = document.getElementById("input-array");
const curr_array = document.querySelector(".curr-array");

let array = new Array();
let bar_mode = 1;
let noOfBars;

//function to generate random number
function randomNumber() {
  return Math.floor(Math.random() * (90 - 7) + 7);
}

//function to generate random array
function generateArray() {
  let temp;
  if (bar_mode === 1) {
    noOfBars = 20;
    temp = new Array(noOfBars);
  } else {
    noOfBars = 10;
    temp = new Array(noOfBars);
  }

  for (let i = 0; i < temp.length; i++) {
    temp[i] = randomNumber();
  }
  array = temp;
}

//function to render bars on screen
async function renderArray() {
  curr_array.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    div2.classList.add("array-box");
    div2.innerText = array[i];
    div.innerText = array[i];

    if (bar_mode == 1) {
      div.style.height = array[i] * 5 + "px";
      div.classList.add("bar");
      await sleep(50);
      curr_array.appendChild(div2);
      bar_container.appendChild(div);
    } else {
      div.classList.add("box");
      await sleep(50);
      container.appendChild(div);
      curr_array.appendChild(div2);
    }
  }
}

// function to set delay in visualization
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Eventlistners

// array from user
input_array.addEventListener("click", () => {
  let str = prompt("Please Enter your data in CSV format :- ");
  let temp = new Array();
  temp = str.split(",");
  for (a in temp) {
    temp[a] = parseInt(temp[a]);
  }
  array = temp;
  if (bar_mode === 1) bar_container.innerHTML = "";
  else container.innerHTML = "";
  renderArray();
});

generate_array_btn.addEventListener("click", function () {
  generateArray();
  if (bar_mode === 1) bar_container.innerHTML = "";
  else container.innerHTML = "";
  renderArray();
});

again.addEventListener("click", () => {
  if (bar_mode === 1) bar_container.innerHTML = "";
  else container.innerHTML = "";
  renderArray();
});

start.addEventListener("click", function () {
  let algo = document.querySelector(".btn-1-active").dataset.value;

  let temp = new Array(noOfBars);
  temp = [...array];
  switch (algo) {
    case "1":
      if (bar_mode === 1) {
        bubbleSort(temp);
        break;
      } else {
        bubble(temp);
        break;
      }
    case "2":
      if (bar_mode === 1) {
        selectionSort(temp);
        break;
      } else {
        selection(temp);
        break;
      }
    case "3":
      if (bar_mode === 1) {
        insertionSort(temp);
        break;
      } else {
        insertion(temp);
        break;
      }
    case "4":
      if (bar_mode === 1) {
        let bars = document.querySelectorAll(".bar");
        devide(bars, 0, temp.length - 1);
        break;
      } else {
        console.log(
          "Opps Box model is not working for merge sort yet! Please try Bar model"
        );
        break;
      }
  }
});

switch_btn.addEventListener("click", () => {
  if (bar_mode == 1) {
    bar_mode = 0;
    switch_btn.innerHTML = "Try Bar";
    bar_container.classList.remove("bar-container");
    bar_container.classList.add("hide");
    box_container.classList.remove("hide");
    box_container.classList.add("box-container");
  } else {
    bar_mode = 1;
    switch_btn.innerHTML = "Try Box";
    bar_container.classList.remove("hide");
    bar_container.classList.add("bar-container");
    box_container.classList.add("hide");
    box_container.classList.remove("box-container");
  }
});

// navbar working

btn_container.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn-1");

  btn.forEach((btn) => btn.classList.remove("btn-1-active"));
  clicked.classList.add("btn-1-active");

  if (!clicked) return;

  switch (clicked.dataset.value) {
    case "1":
      updatesForBub();
      break;
    case "2":
      updatesForSel();
      break;
    case "3":
      updatesForIns();
      break;
    case "4":
      updatesForMer();
      break;
  }
});

addEventListener("DOMContentLoaded", function () {
  generateArray();
  renderArray();
});

function disableButtons() {
  start.disabled = true;
  generate_array_btn.disabled = true;
  again.disabled = true;
  switch_btn.style.pointerEvents = "none";
  input_array.style.pointerEvents = "none";
  btn_container.style.pointerEvents = "none";
}

function enableButtons() {
  start.disabled = false;
  generate_array_btn.disabled = false;
  again.disabled = false;
  switch_btn.style.pointerEvents = "auto";
  input_array.style.pointerEvents = "auto";
  btn_container.style.pointerEvents = "auto";
}

function updatesForBub() {
  //update time complexity
  bigo.innerText = "O(n)";
  omega.innerText = `O(n^2)`;
  theta.innerText = `O(n^2)`;

  // update colors
  if (dot_3.classList.contains("blue")) dot_3.classList.remove("blue");
  if (dot_3.classList.contains("hide")) dot_3.classList.remove("hide");
  dot_3.classList.add("red");
  if (status_3.classList.contains("hide")) status_3.classList.remove("hide");
  status_3.innerText = "Swapping";

  dot_1.classList.add("green");
  status_1.innerText = "Sorted";

  if (dot_2.classList.contains("orange")) dot_2.classList.remove("orange");

  dot_2.classList.add("yellow");
  status_2.innerText = "Comparing";
}

function updatesForSel() {
  //update time complexity
  bigo.innerText = `O(n^2)`;
  omega.innerText = `O(n^2)`;
  theta.innerText = `O(n^2)`;

  // update colors
  if (dot_3.classList.contains("red")) dot_3.classList.remove("red");
  if (dot_3.classList.contains("hide")) dot_3.classList.remove("hide");
  dot_3.classList.add("blue");
  if (status_3.classList.contains("hide")) status_3.classList.remove("hide");
  status_3.innerText = "Current Min";

  dot_1.classList.add("green");
  status_1.innerText = "Sorted";

  if (dot_2.classList.contains("orange")) dot_2.classList.remove("orange");

  dot_2.classList.add("yellow");
  status_2.innerText = "Comparing";
}

function updatesForIns() {
  //update time complexity
  bigo.innerText = "O(n)";
  omega.innerText = `O(n^2)`;
  theta.innerText = `O(n^2)`;

  // update colors
  if (dot_3.classList.contains("blue")) dot_3.classList.remove("blue");
  if (dot_3.classList.contains("red")) dot_3.classList.remove("red");
  dot_3.classList.add("hide");
  status_3.classList.add("hide");

  dot_1.classList.add("green");
  status_1.innerText = "Sorted";

  if (dot_2.classList.contains("yellow"));
  dot_2.classList.remove("yellow");

  dot_2.classList.add("orange");
  status_2.innerText = "Current Element";
}

function updatesForMer() {
  //update time complexity
  bigo.innerText = "O(n log(n))";
  omega.innerText = "O(n log(n))";
  theta.innerText = "O(n log(n))";

  // update colors
  if (dot_3.classList.contains("blue")) dot_3.classList.remove("blue");
  if (dot_3.classList.contains("hide")) dot_3.classList.remove("hide");
  dot_3.classList.add("red");
  if (status_3.classList.contains("hide")) status_3.classList.remove("hide");
  status_3.innerText = "Right-Part";

  dot_1.classList.add("green");
  status_1.innerText = "Sorted";

  if (dot_2.classList.contains("yellow"));
  dot_2.classList.remove("yellow");

  dot_2.classList.add("orange");
  status_2.innerText = "Left-Part";
}
