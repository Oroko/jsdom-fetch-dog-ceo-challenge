const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const divImgContainer = document.querySelector("#dog-image-container");
const ul = document.querySelector("#dog-breeds");
const select = document.querySelector("#breed-dropdown");
let p = document.createElement("p");
let breeds = [];

fetch(imgUrl)
  .then((res) => res.json())
  .then((json) => {
    json.message.forEach((img) => {
      const image = document.createElement("img");
      image.src = img;
      image.alt = "Dog images";
      image.width = "200";
      image.height = "200";
      divImgContainer.appendChild(image);
    });
  });

fetch(breedUrl)
  .then((res) => res.json())
  .then((json) => {
    breeds = Object.keys(json.message);
    renderBreed(breeds);
  });

ul.addEventListener("click", (e) => {
  e.target.style.color = "red";
});

select.addEventListener("click", (e) => {
  console.log(e.target.value);
  const letter = e.target.value;

  const filteredBreeds = breeds.filter((breed) => breed.startsWith(letter));
  console.log(filteredBreeds);
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  renderBreed(filteredBreeds);
});

const renderBreed = (arrBreeds) => {
  arrBreeds.forEach((breed) => {
    const li = document.createElement("li");
    breedText = document.createTextNode(breed);
    li.appendChild(breedText);
    ul.appendChild(li);
  });
};
