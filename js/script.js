const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
let searchData = document.querySelector(".search-data");
let resultsBox = document.querySelector(".results-box");
let resultsDiv = document.querySelector(".results-box div");
// let searchData = document.querySelector(".search-data");

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
    return `<a href="subjects.html" target="_blank"><li>${e.name} / ${e.name2}</li></a>`;
  });
  resultsBox.classList.add("active");
  resultsDiv.classList.add("active");
  showSub(subArr);

  // console.log(resultsLi);
});

function showSub(list) {
  let listData;
  if (!list.length) {
    lowerData = searchData.value;
    list = lowerData;
  } else {
    listData = list.join("");
    console.log(listData);
    // listData.addEventListener("click", (e) => {
    //   console.log(e);
    // });
  }
  resultsDiv.innerHTML = listData;
}

window.addEventListener("click", (e) => {
  resultsBox.classList.remove("active");
  resultsDiv.classList.remove("active");
});
// =================================
// =================================
// =================================
// (function ($) {
//   $.fn.rwdImageMaps = function () {
//     var $img = this;

//     var rwdImageMap = function () {
//       $img.each(function () {
//         if (typeof $(this).attr("usemap") == "undefined") return;

//         var that = this,
//           $that = $(that);

//         // Since WebKit doesn't know the height until after the image has loaded, perform everything in an onload copy
//         $("<img />")
//           .on("load", function () {
//             var attrW = "width",
//               attrH = "height",
//               w = $that.attr(attrW),
//               h = $that.attr(attrH);

//             if (!w || !h) {
//               var temp = new Image();
//               temp.src = $that.attr("src");
//               if (!w) w = temp.width;
//               if (!h) h = temp.height;
//             }

//             var wPercent = $that.width() / 100,
//               hPercent = $that.height() / 100,
//               map = $that.attr("usemap").replace("#", ""),
//               c = "coords";

//             $('map[name="' + map + '"]')
//               .find("area")
//               .each(function () {
//                 var $this = $(this);
//                 if (!$this.data(c)) $this.data(c, $this.attr(c));

//                 var coords = $this.data(c).split(","),
//                   coordsPercent = new Array(coords.length);

//                 for (var i = 0; i < coordsPercent.length; ++i) {
//                   if (i % 2 === 0)
//                     coordsPercent[i] = parseInt(
//                       (coords[i] / w) * 100 * wPercent
//                     );
//                   else
//                     coordsPercent[i] = parseInt(
//                       (coords[i] / h) * 100 * hPercent
//                     );
//                 }
//                 $this.attr(c, coordsPercent.toString());
//               });
//           })
//           .attr("src", $that.attr("src"));
//       });
//     };
//     $(window).resize(rwdImageMap).trigger("resize");

//     return this;
//   };
// })(jQuery);

// =============================================
// =============================================
// =============================================

/**
 * Example config:
 * {
    width: 1024, Natural width
    height: 768, Natural height
    element : '#power-puff__map' Selector
   }
 */
class ImageResize {
  /**
   * constructor - make image maps responsive
   * @param {Object} config - setting for responsive image map
   */
  constructor(config) {
    const { width, height, element } = config;

    this.imageW = width;
    this.imageH = height;
    this.imageMap = document.querySelector(element);
    const mapId = this.imageMap.getAttribute("usemap");
    const mapElem = `map[name="${mapId.substring(1, mapId.length)}"]`;
    const area = document.querySelector(mapElem).children;
    this.areaArray = Array.from(area);

    window.addEventListener("resize", this.resizeEvent);
    setTimeout(this.imgMap, 500);
  }
  /**
   * getCoords - get image map coordinates
   * @param  {Node} elem - area tag
   * @return {String} - area map coordinates
   */
  getCoordinates = (elem) => {
    let areaCords = elem.dataset.coords;

    if (!areaCords) {
      areaCords = elem.getAttribute("coords");

      elem.dataset.coords = areaCords;
    }

    return areaCords;
  };
  imgMap = () => {
    this.wPercent = this.imageMap.offsetWidth / 100;
    this.hPercent = this.imageMap.offsetHeight / 100;

    this.areaArray.forEach(this.areaLoop);
  };
  /**
   * areaLoop - Loop through area tags for image map
   * @param  {Node} area - Area tag
   */
  areaLoop = (area) => {
    const coordinates = this.getCoordinates(area).split(",");
    const coordsPercent = coordinates.map(this.mapCoords).join();

    area.setAttribute("coords", coordsPercent);
  };
  /**
   * mapCoords - Set new image map coordinates based on new image width and height
   * @param  {String} coordinate - coordinates from image map array
   * @param  {Num} index - Loop index
   * @return {Num} - New image map coordinates
   */
  mapCoords = (coordinate, index) => {
    const parseCord = parseInt(coordinate, 10);

    return index % 2 === 0
      ? this.coordinatesMath(parseCord, this.imageW, this.wPercent)
      : this.coordinatesMath(parseCord, this.imageH, this.hPercent);
  };
  /**
   * coordinatesMath Set new coordinates from original image map coordinates
   * @param  {number} coordinates - original image map coordinate
   * @param  {number} imgVal - Image width or height value
   * @param  {number} percentVal - New image width or height divided by 100
   * @return {number} - New image map coordinates
   */
  coordinatesMath = (coordinates, imgVal, percentVal) =>
    (coordinates / imgVal) * 100 * percentVal;

  /**
   * resizeEvent - Resize Event
   */
  resizeEvent = () => {
    this.imgMap();
  };
}
const resizeImg = new ImageResize({
  width: 1906,
  height: 2012,
  element: "#power-puff__map",
});
