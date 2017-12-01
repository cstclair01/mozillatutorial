var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/doublet.png') {
      myImage.setAttribute ('src','images/boots.jpeg');
    } else {
      myImage.setAttribute ('src','images/doublet.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Grey Cabin is appreciative of ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Grey Cabin is appreciative of ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}