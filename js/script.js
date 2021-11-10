const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
let searchData = document.querySelector(".search-data");
let resultsBox = document.querySelector(".results-box");
let resultsDiv = document.querySelector(".results-box div");

let subArr = [];
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
};
searchBtn.onclick = () => {
  searchBtn.style.color = "#333";
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
console.log(subjects[0].name);
searchData.addEventListener("keyup", (e) => {
  const lowerData = e.target.value.toLowerCase();
  subArr = subjects.filter((data) => {
    return (
      data.name.toLowerCase().includes(lowerData.toLowerCase()) ||
      data.name2.toLowerCase().includes(lowerData.toLowerCase())
    );
  });
  subArr = subArr.map((e) => {
    return `<a href="${e.subjectLink}" target="_blank"><li>${e.name2}</li></a>`;
  });
  resultsBox.classList.add("active");
  resultsDiv.classList.add("active");
  showSub(subArr);
  let subList = document.querySelectorAll(".results-box div a");
  console.log(subList);
  subList.forEach((e) => {
    e.addEventListener("click", (e) => {
      console.log(e.target.innerHTML);
      for (i = 0; i < subjects.length; i++) {
        if (e.target.innerHTML == subjects[i].name2) {
          localStorage.setItem("subNum", subjects[i].num);
        }
      }
    });
  });
});

function showSub(list) {
  let listData;
  if (!list.length) {
    lowerData = searchData.value;
    list = lowerData;
  } else {
    listData = list.join("");
  }
  resultsDiv.innerHTML = listData;
}

window.addEventListener("click", (e) => {
  resultsBox.classList.remove("active");
  resultsDiv.classList.remove("active");
});
