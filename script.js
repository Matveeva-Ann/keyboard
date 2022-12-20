
// //keyboard operation from mouse click
"use strict";

const placesForText = document.querySelector(".placesForText");
const elem = document.querySelectorAll("div[data-name]");

for (const iterator of elem) {
  iterator.addEventListener("mousedown", function (event) {
    if (iterator.dataset.name === "CapsLock") {
      iterator.classList.toggle("backlight");
    } else {
      iterator.classList.add("backlight");
    }

    if (
      iterator.dataset.name !== "Backspace" &&
      iterator.dataset.name !== "Tab" &&
      iterator.dataset.name !== "CapsLock" &&
      iterator.dataset.name !== "Enter" &&
      iterator.dataset.name !== "ShiftLeft" &&
      iterator.dataset.name !== "ShiftRight" &&
      iterator.dataset.name !== "Space"
    ) {
          
      if (document.querySelector("#CapsLock").classList.contains("backlight")) {
        placesForText.textContent += event.target.innerText.toUpperCase();
      } else {
        placesForText.textContent += event.target.innerText;
      }
    } else if (iterator.dataset.name === "Backspace") {
      placesForText.textContent = placesForText.textContent.slice(0, -1);
    } else if (iterator.dataset.name === "Tab") {
      event.preventDefault();
      placesForText.textContent += "   ";
    } else if (iterator.dataset.name === "Enter") {
      placesForText.textContent += "\n";
    } else if (iterator.dataset.name === "Space") {
      placesForText.textContent += " ";
    }
  });
  
  iterator.addEventListener("mouseup", function () {
    if (iterator.dataset.name !== "CapsLock") {
      iterator.classList.remove("backlight");
    }
  });
}


// keyboard operation from keyboard click



const elements = document.querySelectorAll('div[data-name]');

function createBacklight (el){
  el.classList.add('backlight');
  function delBacklight(event){
    el.classList.remove('backlight');
    window.removeEventListener('keyup', delBacklight)
  }
  window.addEventListener('keyup', delBacklight)
}

window.addEventListener('keydown', function(event){
  event.preventDefault();
  if(!['Tab', 'Enter', 'Backspace', 'ShiftLeft', 'CapsLock', 'AltLeft', 'AltRight', 'ControlLeft', 'ControlRight', 'ShiftRight', 'NumpadEnter'].includes(event.code)){
    placesForText.textContent += event.key;
  }
  else if (['Tab'].includes(event.code)){
    placesForText.textContent += '\t';
  }
  else if (['Enter'].includes(event.code)){
    placesForText.textContent += '\n';

  }
  else if (['Backspace'].includes(event.code)){
    placesForText.textContent = placesForText.textContent.slice(0, -1);
  }

  for (const elem of elements) {
    if (event.code !== 'CapsLock'){
      if (event.code == elem.dataset.name){
        createBacklight(elem);
      }
    }
    else{
      if(event.code == elem.dataset.name){
        elem.classList.toggle('backlight');
      }
    }
  }
})













