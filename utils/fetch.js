export const fetchCars = async () => {
  try {
    const response = await fetch(
      "https://66705ba60900b5f8724a5a17.mockapi.io/cars"
    );
    const cars = await response.json();
    return cars;
  } catch (err) {
    console.error(err);
  }
};

export const fetchCarById = async (id) => {
  try {
    const response = await fetch(
      `https://66705ba60900b5f8724a5a17.mockapi.io/cars/${id}`
    );
    const car = await response.json();
    return car;
  } catch (err) {
    console.log(err);
  }
};

export const deleteCar = async (id) => {
  try {
    const response = await fetch(
      `https://66705ba60900b5f8724a5a17.mockapi.io/cars/${id}`,
      {
        method: "delete",
      }
    );
    const status = await response.json();
    const msg = document.getElementById("msg");
    msg.style.display = "block";
    msg.textContent = "Your post has been deleted !";
    console.log(status);
    // setTimeout(() => {
    //   window.location.replace("");
    // }, 3000);
  } catch (err) {
    console.log(err);
  }
};
