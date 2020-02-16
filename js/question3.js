const descriptionUrl = "https://api.rawg.io/api/games/4200";

fetch(descriptionUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    createGameDetails(json);
  })
  .catch(function() {
    document.location.href = "error.html";
  });

function createGameDetails(json) {
  console.dir(json);

  const backgroundImage = document.querySelector(".image");
  backgroundImage.style.backgroundImage = `url("${json.background_image}")`;

  const name = document.querySelector("h1");
  name.innerHTML = json.name;

  const description = document.querySelector(".description");
  description.innerHTML = json.description;
}
