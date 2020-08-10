
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
