var myImage = document.querySelector('img');

/*myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/slothy.jpg') {
      myImage.setAttribute ('src','images/slothfamily.jpg');
    } else {
      myImage.setAttribute ('src','images/slothy.jpg');
    }
}
*/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Slothy loves you, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Slothy loves you, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
