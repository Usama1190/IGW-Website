// When the user scrolls down 80px from the top of the document, resize the 
// navbar's padding and the logo's font-size

window.onscroll = function () {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("webnav_wrapper").style.padding = "10px 10px";

    document.getElementById("weblogoimg_wrapper").style.height = "50px";
    document.getElementById("weblogoimg_wrapper").style.width = "50px";

    document.getElementById("webnameh3_wrapper").style.fontSize = "17px";

    document.getElementById("weblogo_wrapper").style.width = "5%";
    document.getElementById("webname_wrapper").style.width = "35%";
  }
  else{
    document.getElementById("webnav_wrapper").style.padding = "80px 70px";

    document.getElementById("weblogoimg_wrapper").style.height = "100px";
    document.getElementById("weblogoimg_wrapper").style.width = "100px";

    document.getElementById("webnameh3_wrapper").style.fontSize = "30px";

    document.getElementById("weblogo_wrapper").style.width = "10%";
    document.getElementById("webname_wrapper").style.width = "30%";
  }
}


// Activate Link Functions

function homeLink() {
  document.getElementById('home').style.borderBottom = '2px solid rgb(0, 48, 0)';
  document.getElementById('home').style.color = '#858585';

  document.getElementById('products').style.border = 'none';
  document.getElementById('services').style.border = 'none';
  document.getElementById('about').style.border = 'none';
  document.getElementById('contact').style.border = 'none';

  document.getElementById('products').style.color = '#000';
  document.getElementById('services').style.color = '#000';
  document.getElementById('about').style.color = '#000';
  document.getElementById('contact').style.color = '#000';
}

function productsLink() {
  document.getElementById('products').style.borderBottom = '2px solid rgb(0, 48, 0)';
  document.getElementById('products').style.color = '#858585';

  document.getElementById('home').style.border = 'none';
  document.getElementById('services').style.border = 'none';
  document.getElementById('about').style.border = 'none';
  document.getElementById('contact').style.border = 'none';

  document.getElementById('home').style.color = '#000';
  document.getElementById('services').style.color = '#000';
  document.getElementById('about').style.color = '#000';
  document.getElementById('contact').style.color = '#000';
}

function servicesLink() {
  document.getElementById('services').style.borderBottom = '2px solid rgb(0, 48, 0)';
  document.getElementById('services').style.color = '#858585';

  document.getElementById('products').style.border = 'none';
  document.getElementById('home').style.border = 'none';
  document.getElementById('about').style.border = 'none';
  document.getElementById('contact').style.border = 'none';

  document.getElementById('home').style.color = '#000';
  document.getElementById('products').style.color = '#000';
  document.getElementById('about').style.color = '#000';
  document.getElementById('contact').style.color = '#000';
}

function aboutLink() {
  document.getElementById('about').style.borderBottom = '2px solid rgb(0, 48, 0)';
  document.getElementById('about').style.color = '#858585';

  document.getElementById('products').style.border = 'none';
  document.getElementById('services').style.border = 'none';
  document.getElementById('home').style.border = 'none';
  document.getElementById('contact').style.border = 'none';

  document.getElementById('home').style.color = '#000';
  document.getElementById('services').style.color = '#000';
  document.getElementById('products').style.color = '#000';
  document.getElementById('contact').style.color = '#000';
}

function contactLink() {
  document.getElementById('contact').style.borderBottom = '2px solid rgb(0, 48, 0)';
  document.getElementById('contact').style.color = '#858585';

  document.getElementById('products').style.border = 'none';
  document.getElementById('services').style.border = 'none';
  document.getElementById('about').style.border = 'none';
  document.getElementById('home').style.border = 'none';

  document.getElementById('home').style.color = '#000';
  document.getElementById('services').style.color = '#000';
  document.getElementById('about').style.color = '#000';
  document.getElementById('products').style.color = '#000';
}

// Hover Effect 
function hoverEffect(id) {
  const getId = document.getElementById(id)
  getId = 'hover';
}

// function leaveEffect(id) {
//   document.getElementById(id).style.border = 'none';
//   document.getElementById(id).style.color = '#000';
// }