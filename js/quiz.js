// step 2 populate page

// populates page with json object information //
function populatePage (inventory) {
  var finalCars = document.getElementById("container");
  var carHTML = "";
console.log(inventory);
  for (var i = 0; i < inventory.length; i++) {
    var currentCar = inventory[i];
    var counter = i;
    carHTML += `<car class="col-sm-4 carBox border" id="car-${counter}" style="border-color: ${currentCar.color}"><h1>${currentCar.make} ${currentCar.model}</h1>`;
    carHTML += `<h5>${currentCar.year} | ${currentCar.color}</h5>`;
    carHTML += `<h6>Cost: ${currentCar.price}</h6>`;
    carHTML += `<h6>Purchased: ${currentCar.purchased}</h6>`;
    carHTML += `<p>${currentCar.description}</p>`
    carHTML += `</car>`;
  }

  finalCars.innerHTML += carHTML;

  CarLot.activateEvents();
}

// runs load json with populate as a callback //
CarLot.loadInventory(populatePage);

