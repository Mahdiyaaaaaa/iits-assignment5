var form = document.querySelector("form");
var number = document.getElementById("iits-inp");

form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault(); //stop default clear

  // condition
  if (number.value > 100) {
    alert("Enter in between 0-100");
  } else if (number.value >= 81 && number.value <= 100) {
    increment("iits-a_count");
  } else if (number.value >= 71 && number.value <= 80) {
    increment("iits-bp_count");
  } else if (number.value >= 61 && number.value <= 70) {
    increment("iits-b_count");
  } else if (number.value >= 51 && number.value <= 60) {
    increment("iits-bm_count");
  } else if (number.value >= 40 && number.value <= 50) {
    increment("iits-c_count");
  } else if (number.value <= 40) {
    increment("iits-f_count");
  }
  //clear value after incrementing
  number.value = "";

  // Increment function
  function increment(id) {
    var countE = document.getElementById(id);
    var count = parseInt(countE.textContent);
    countE.textContent = (count + 1).toString();
  }
}
