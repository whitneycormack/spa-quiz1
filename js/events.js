// step 3

var CarLot = (function (oldCarLot) {

// Calls by tag name then adds event listener through array //
  oldCarLot.activateEvents = function () {
    var cars = document.getElementsByTagName("car");

    for (var i = 0; i < cars.length; i++) {
      cars[i].addEventListener("click", function () {
        var car = event.currentTarget;
        var background = "#d3d3d3";
        oldCarLot.border(car, background);
      });
    }

// also adds keyup attribute //
    var textInput = document.getElementById("text-input");
    textInput.setAttribute("onkeyup", "CarLot.replaceDescription()");
  }

  return oldCarLot;
})(CarLot || {});