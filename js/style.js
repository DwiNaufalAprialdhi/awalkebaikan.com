// countdown Payment

// Set waktu yang ditentukan
var countDownDate = new Date("Dec 3, 2023 23:59:00").getTime();

// update setiap 1 detik
var x = setInterval(function() {

  // Get hari dan waktu
  var now = new Date().getTime();
    
  // Get hari dan waktu untuk bersamaan
  var distance = countDownDate - now;
    
  // Time kalkulasi
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Kirim berdasarkan id
  document.getElementById("countdown").innerHTML = days + "d:" + hours + ":"
  + minutes + ":" + seconds + "";
    
  // Jika waktu sudah tiba maka kadaluarsa
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

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

// copy Nominal
function copyText() {
  var nominal = document.getElementById("nominalInput");

  nominal.select();
  nominal.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(nominal.value);  
}

// copy Rekening
function copyTextCredit() {
  var credit = document.getElementById("creditInput");

  credit.select();
  credit.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(credit.value);  
}