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
    let spin = document.querySelector('.sk-folding-cube')
    spin.style.display = "block"
    let anim = document.getElementById('switch')
    anim.style.display = 'none'
    setTimeout(() => {
      anim.style.display = "block"
      spin.style.display = "none"
      anim.style.animationPlayState = "running"
    }, 1200)
    console.log('animate')
  }
})
