import { fetchCarById, deleteCar } from "../utils/fetch.js";

const title = document.getElementById("title");
const img = document.getElementById("img");
const price = document.getElementById("price");
const description = document.getElementById("description");
const city = document.getElementById("city");
const deleteBtn = document.getElementById("deleteBtn");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const car = await fetchCarById(id);

title.textContent = car.title;
img.src = car.imgUrl;
price.textContent = formatter.format(car.price);
description.textContent = car.description;
city.textContent = car.city;

deleteBtn.addEventListener("click", () => deleteCar(id));
