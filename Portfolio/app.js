const fullname = document.getElementById("username");

setInterval(() => {
  if (fullname.textContent === "Devender Kumar Thakur") {
    fullname.textContent = "Web Developer";
  } else {
    fullname.textContent = "Devender Kumar Thakur";
  }
}, 1500);
