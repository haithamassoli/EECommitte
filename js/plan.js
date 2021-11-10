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
