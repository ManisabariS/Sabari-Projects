fetch(File.txt)
.then(response=>response.text())
.then(y => document.getElementById("h1").innerHTML = y);