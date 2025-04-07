// Dynamic Content
const pages = [
  {
    copy: "a Brooklyn-based graphic designer",
    background: "#edc7a9",
    circle: "#3e78ed",
  },
  {
    copy: "Kanye West's biggest fan",
    background: "#a1fffe",
    circle: "#e34a47",
  },
  {
    copy: "looking for a job at the start of October",
    background: "#d3c7f3",
    circle: "#f7fe00",
  },

  {
    copy: `letting you <a href="pdf.pdf">download her PDF</a>`,
    background: "#faffb8",
    circle: "#b472e6",
  },
];

const previousBtn = document.getElementById("prev");
const shuffleBtn = document.getElementById("random");
const nextBtn = document.getElementById("next");
const headerTag = document.querySelector("h2");
const bodyTag = document.querySelector("body");
const circleTag = document.getElementById("circle");

let pageNumber = 0;

// Logic to update page

function updatePage() {
  headerTag.innerHTML = pages[pageNumber].copy;
  bodyTag.style.backgroundColor = pages[pageNumber].background;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
}

// Controls for Next Button

function next() {
  pageNumber = pageNumber + 1;
  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }
  updatePage();
}

nextBtn.addEventListener("click", function () {
  next();
});

// Controls for Previous Button
function previous() {
  pageNumber = pageNumber - 1;
  if (pageNumber < 0) {
    pageNumber = 3;
  }
  updatePage();
}

previousBtn.addEventListener("click", function () {
  previous();
});

// Controls for Random Button
function random() {
  pageNumber = Math.floor(Math.random() * 4);
  updatePage();
}

shuffleBtn.addEventListener("click", function () {
  random();
});

document.addEventListener("keyup", function (event) {
  console.log(event);

  if (event.key == "ArrowRight") {
    next();
  } else if (event.key == "ArrowLeft") {
    previous();
  }
});
