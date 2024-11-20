function image1() {
  document.getElementById('picture').style.background = "url('./changes/remove1.png') center center / cover";
}

function image2() {
  document.getElementById('picture').style.background = "url('./changes/remove3.png') center center / cover";
}

function image3() {
  document.getElementById('picture').style.background = "url('./changes/remove4.png') center center / cover";
}

function image4() {
  document.getElementById('picture').style.background = "url('./changes/remove2.png') center center / cover";
}

function toggleNavbar() {
  var navbarList = document.getElementById("navbarList");
  if (navbarList.style.display === "block") {
      navbarList.style.display = "none";
  } else {
      navbarList.style.display = "block";
  }
}

document.getElementById("reviewForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var reviewText = document.getElementById("reviewText").value;
  var reviewerName = document.getElementById("reviewerName").value;

  if (reviewText && reviewerName) {
      var newTestimonial = document.createElement("div");
      newTestimonial.classList.add("testimonial");
      newTestimonial.innerHTML = "<p>\"" + reviewText + "\"</p><h4>- " + reviewerName + "</h4>";
      document.querySelector(".testimonial-slider").appendChild(newTestimonial);

      document.getElementById("reviewText").value = "";
      document.getElementById("reviewerName").value = "";
  }
});

document.addEventListener("DOMContentLoaded", function() {
  // انیمیشن به صورت خودکار شروع می‌شود
});