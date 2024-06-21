const btn = document.getElementById("submit-btn");
const imgUrl = document.getElementById("imgUrl");
const title = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const city = document.getElementById("city");

btn.addEventListener("click", () => {
  if (!price.value) {
    return;
  }

  const data = {
    title: title.value,
    price: price.value,
    imgUrl: imgUrl.value,
    description: description.value,
    city: city.value,
  };

  const msg = document.getElementById("msg");
  msg.style.display = "block";
  msg.textContent =
    "Your car is successfully posted! After 2 seconds you will return to the main menu.";

  fetch("https://66705ba60900b5f8724a5a17.mockapi.io/cars", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      title.value = "";
      price.value = "";
      imgUrl.value = "";
      description.value = "";
      city.value = "";
      setTimeout(() => {
        window.location.replace("/index.html");
      }, 2000);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
