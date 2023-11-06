//slide gambar
let start = 0;
geser();
function geser() {
  let gambar = document.getElementsByClassName("image-slide");
  let dot = document.getElementsByClassName("dot");

  if (start >= gambar.length) {
    start = 0;
  }
  if (start == 0) {
    gambar[0].className = "image-slide active1";
    gambar[1].className = "image-slide off1";
    dot[0].className = "dot active";
    dot[1].className = "dot";
  } else if (start == 1) {
    gambar[1].className = "image-slide active2";
    gambar[0].className = "image-slide off2";
    dot[1].className = "dot active";
    dot[0].className = "dot";
  }
  start++;
  setTimeout(geser, 5000); //5000 = 5 detik
}

function klik(n) {
  const item = document.getElementsByClassName("image-slide");
  const dot = document.getElementsByClassName("dot");

  if (n == 0) {
    dot[0].className = "dot active";
    dot[1].className = "dot";
    item[0].className = "image-slide active1";
    item[1].className = "image-slide off1";
  } else if (n == 1) {
    dot[1].className = "dot active";
    dot[0].className = "dot";
    item[1].className = "image-slide active2";
    item[0].className = "image-slide off2";
  }
}
//end slide gambar
