import { fetchCars } from "./utils/fetch.js";

const cardsWrapper = document.getElementById("cards-wrapper");
const burgerBtn = document.getElementById("burger-button");
const mobileNav = document.getElementById("mobile-nav");

const buildCards = (data) => {
  cardsWrapper.innerHTML = "";
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  data.forEach((d) => {
    const card = document.createElement("a");
    card.href = `./car/car.html?id=${d.id}`;
    card.setAttribute("class", "card");

    const title = document.createElement("h1");
    title.textContent = d.title;

    const img = document.createElement("img");
    img.src = d.imgUrl;

    const price = document.createElement("h2");
    price.textContent = formatter.format(d.price);

    card.append(img, title, price);
    cardsWrapper.append(card);
  });
};

const cars = await fetchCars();
cars.sort((a, b) => a.price - b.price);
buildCards(cars);

burgerBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});
