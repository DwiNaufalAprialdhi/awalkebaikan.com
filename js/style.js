// visible Toggle 
const visible = document.querySelector('.visible')
const unvisible = document.querySelector('.unvisible')
var x = document.getElementById("myPassword");

function visibleToggle() {
    if (x.type === "password") {
      x.type = "text";
    //   visible.classList.add('hidden')
      unvisible.classList.add('block')

    } else {
      x.type = "password";
      visible.classList.add('block')
      unvisible.classList.add('hidden')
    }
  }
  
function unvisibleToggle(){
    if (x.type === "text") {
        x.type = "password";
        unvisible.classList.toggle('block')
    } else {
        x.type = "text";
        unvisible.classList.toggle('hidden')
    }
}