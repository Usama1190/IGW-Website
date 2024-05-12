// When the user scrolls down 80px from the top of the document, resize the 
// navbar's padding and the logo's font-size

window.onscroll = function () {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px"
  }
  else{
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

document.getElementById('home').style.backgroundColor = 'dodgerblue';

let myList = [];

function activeNavlink(id) {
  myList.push(document.getElementById(id).innerText);

  console.log(myList);

  let addColor = document.getElementById(id).style.backgroundColor = 'dodgerblue';
  console.log(addColor);

  if(true) {}
}