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
