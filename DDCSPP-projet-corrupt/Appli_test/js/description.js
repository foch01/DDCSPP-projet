var desc = document.getElementsByClassName("open");
var i;

for (i = 0; i < desc.length; i++) {
    desc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}