import { offers } from "../data/data.js";

for (const offerCategory of offers) {
  const sliderContent = document.querySelector(
    `#${offerCategory.id} .offer--content`
  );

  for (const data of offerCategory.data) {
    const offer = createOffer(data);
    sliderContent.appendChild(offer);
  }
}

function createOffer(offer) {
  const offerContainer = document.createElement("a");
  offerContainer.className = "card";

  const image = document.createElement("img");
  image.src = offer.image;
  image.alt = offer.alt;
  image.setAttribute("loading", "lazy");
  image.setAttribute("draggable", "false");
  image.className = "card--image";

  const title = document.createElement("p");
  title.textContent = offer.title;
  title.className = "card--title";

  offerContainer.appendChild(image);
  offerContainer.appendChild(title);

  return offerContainer;
}
