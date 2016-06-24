// step 4 - editing descriptions.. (13 is 'enter' key)

var CarLot = ( function (Cars) {

// called onkeyup to replace description //
  CarLot.replaceDescription =  function () {
    var selectedCard = document.getElementsByClassName("selected");
    var textInput = document.getElementById("text-input");  
    var replacedDescript = selectedCard[0].getElementsByTagName("p");
    if (event.keyCode === 13) {
      for (var i = 0; i < selectedCard.length; i++) {
        selectedCard[i].style.backgroundColor = "#fff";
        selectedCard[i].classList.remove("selected");
      }
      return textInput.value = "";
    }
    replacedDescript[0].innerText = textInput.value;
  };

// borders and changes background color //
  CarLot.border = function (place, color) {
    var cardsToUnborder = document.getElementsByClassName("carBox");
    CarLot.unborder();
    place.classList.add("selected");
    place.style.backgroundColor = color;
    CarLot.selectTextInput();
  }

// unborders and reverts background color to white //
  CarLot.unborder = function () {
    var cardsToUnborder = document.getElementsByClassName("carBox");
    for (var i = 0; i < cardsToUnborder.length; i++) {
      cardsToUnborder[i].classList.remove("selected");
      cardsToUnborder[i].style.backgroundColor = "#fff";
    }
  }  

// selects and clears text input -- used when clicking on card to change description // 
  CarLot.selectTextInput = function () {    
    var textInput = document.getElementById("text-input");  
    textInput.value = "";
    textInput.focus();
  }

  return Cars;
})(CarLot || {});