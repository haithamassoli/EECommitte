function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

class ImageResize {
  constructor(config) {
    _defineProperty(
      this,
      "getCoordinates",

      (elem) => {
        let areaCords = elem.dataset.coords;

        if (!areaCords) {
          areaCords = elem.getAttribute("coords");

          elem.dataset.coords = areaCords;
        }

        return areaCords;
      }
    );
    _defineProperty(this, "imgMap", () => {
      this.wPercent = this.imageMap.offsetWidth / 100;
      this.hPercent = this.imageMap.offsetHeight / 100;

      this.areaArray.forEach(this.areaLoop);
    });
    _defineProperty(
      this,
      "areaLoop",

      (area) => {
        const coordinates = this.getCoordinates(area).split(",");
        const coordsPercent = coordinates.map(this.mapCoords).join();

        area.setAttribute("coords", coordsPercent);
      }
    );
    _defineProperty(
      this,
      "mapCoords",

      (coordinate, index) => {
        const parseCord = parseInt(coordinate, 10);

        return index % 2 === 0
          ? this.coordinatesMath(parseCord, this.imageW, this.wPercent)
          : this.coordinatesMath(parseCord, this.imageH, this.hPercent);
      }
    );
    _defineProperty(
      this,
      "coordinatesMath",

      (coordinates, imgVal, percentVal) =>
        (coordinates / imgVal) * 100 * percentVal
    );
    _defineProperty(
      this,
      "resizeEvent",

      () => {
        this.imgMap();
      }
    );
    const { width, height, element } = config;
    this.imageW = width;
    this.imageH = height;
    this.imageMap = document.querySelector(element);
    const mapId = this.imageMap.getAttribute("usemap");
    const mapElem = `map[name="${mapId.substring(1, mapId.length)}"]`;
    const _area = document.querySelector(mapElem).children;
    this.areaArray = Array.from(_area);
    window.addEventListener("resize", this.resizeEvent);
    setTimeout(this.imgMap, 500);
  }
}
const resizeImg = new ImageResize({
  width: 1906,
  height: 2012,
  element: "#subjects__map",
});

let area = document.querySelectorAll("area");
console.log(area);
area.forEach((e) => {
  e.addEventListener("click", (e) => {
    console.log(e.path[0].alt);
    for (i = 0; i < subjects.length; i++) {
      if (e.path[0].alt == subjects[i].name2) {
        localStorage.setItem("subNum", subjects[i].num);
      }
    }
  });
});
let holderSqr = document.querySelector(".holder-sqr");
let holderImg = document.querySelector(".holder");
let sqr5 = document.querySelector(".sqr-5Div");
let sqr4 = document.querySelector(".sqr-4Div");
let sqr3 = document.querySelector(".sqr-3Div");
let sqr2 = document.querySelector(".sqr-2Div");
let sqr1 = document.querySelector(".sqr-1Div");
let sqr0 = document.querySelector(".sqr-0Div");

let firstBtn = document.querySelector(".firstBtn");
let secondBtn = document.querySelector(".secondBtn");
let thirdBtn = document.querySelector(".thirdBtn");
let fourthBtn = document.querySelector(".fourthBtn");
let fifthBtn = document.querySelector(".fifthBtn");
let sixthBtn = document.querySelector(".sixthBtn");

firstBtn.addEventListener("click", () => {
  holderSqr.style.display = "block";
  holderImg.style.display = "none";
  sqr0.style.display = "block";
  sqr1.style.display = "none";
  sqr2.style.display = "none";
  sqr3.style.display = "none";
  sqr4.style.display = "none";
  sqr5.style.display = "none";
});
secondBtn.addEventListener("click", () => {
  holderSqr.style.display = "block";
  holderImg.style.display = "none";
  sqr1.style.display = "block";
  sqr0.style.display = "none";
  sqr2.style.display = "none";
  sqr3.style.display = "none";
  sqr4.style.display = "none";
  sqr5.style.display = "none";
});
thirdBtn.addEventListener("click", () => {
  holderSqr.style.display = "block";
  holderImg.style.display = "none";
  sqr2.style.display = "block";
  sqr1.style.display = "none";
  sqr0.style.display = "none";
  sqr3.style.display = "none";
  sqr4.style.display = "none";
  sqr5.style.display = "none";
});
fourthBtn.addEventListener("click", () => {
  holderSqr.style.display = "block";
  holderImg.style.display = "none";
  sqr3.style.display = "block";
  sqr1.style.display = "none";
  sqr2.style.display = "none";
  sqr0.style.display = "none";
  sqr4.style.display = "none";
  sqr5.style.display = "none";
});
fifthBtn.addEventListener("click", () => {
  holderSqr.style.display = "block";
  holderImg.style.display = "none";
  sqr4.style.display = "block";
  sqr1.style.display = "none";
  sqr2.style.display = "none";
  sqr3.style.display = "none";
  sqr0.style.display = "none";
  sqr5.style.display = "none";
});
sixthBtn.addEventListener("click", () => {
  holderSqr.style.display = "block";
  holderImg.style.display = "none";
  sqr5.style.display = "block";
  sqr1.style.display = "none";
  sqr2.style.display = "none";
  sqr3.style.display = "none";
  sqr4.style.display = "none";
  sqr0.style.display = "none";
});
