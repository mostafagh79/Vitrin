import { categories as data } from "../data/data.js";

const categories = document.getElementById("categories");

for (const category of data) {
  const card = createCategory(category);
  categories.appendChild(card);
}

function createCategory(category) {
  const card = document.createElement("a");
  card.className = "category";

  const image = document.createElement("img");
  image.src = category.image;
  image.alt = category.alt;
  image.setAttribute("loading", "lazy");
  image.setAttribute("draggable", "false");
  image.className = "category--image";

  const title = document.createElement("p");
  title.textContent = category.title;
  title.className = "card--title";

  card.appendChild(image);
  card.appendChild(title);

  return card;
}
