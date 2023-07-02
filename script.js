const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

const closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", function() {
  closeButton.parentNode.remove();
});