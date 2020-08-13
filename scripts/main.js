
function loadDoc1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("switch").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "home_info.txt", true);
  xhttp.send();
}

function loadDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("switch").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "second_info.txt", true);
  xhttp.send();
}

function loadDoc3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("switch").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "about_info.txt", true);
  xhttp.send();
}


document.addEventListener('click', event => {
  const element = event.target;
  if (element.className === "nav-it") {
    let list = document.querySelectorAll('.nav-it')
    list.forEach(item => {
      item.setAttribute('id', '')
    })
    element.setAttribute('id', 'selection')
    console.log('change')
  }
})

document.addEventListener('click', event => {
  let gallery = event.target;
  if (gallery.parentElement.id === "galleryLoad") {
    console.log("gallery")
    setTimeout( () => {
    var slides = document.getElementsByClassName("mySlides");
    slides[0].style.display = "block";
  }, 500)
  }
})

var slideIndex = 1
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
