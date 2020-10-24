let acc = document.getElementsByClassName("insctuction_text");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(event) {  
    let panel=event.target.parentNode.parentNode.nextElementSibling;  
    panel.parentNode.classList.toggle("hb") ;
    panel.classList.toggle("active");

  });
}