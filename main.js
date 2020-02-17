// Cuisine Section
const cuisines = [
  {
    name: "Italian",
    total: 327,
    image: "images/italian.png"
  },
  {
    name: "Indian",
    total: 856,
    image: "images/indian.png"
  },
  {
    name: "French",
    total: 27,
    image: "images/french.png"
  },
  {
    name: "Steakhouse",
    total: 174,
    image: "images/steak.png"
  },
  {
    name: "Seafood",
    total: 75,
    image: "images/seafood.png"
  },
  {
    name: "Sushi",
    total: 237,
    image: "images/sushi.png"
  },
  {
    name: "Mexican",
    total: 529,
    image: "images/mexican.png"
  },
  {
    name: "Chinese",
    total: 145,
    image: "images/chinese.png"
  },
  {
    name: "Pizza",
    total: 327,
    image: "images/pizza.png"
  },
  {
    name: "American",
    total: 1437,
    image: "images/american.png"
  }
];

const recipesNumber = [
  { total: 23567, description: "recipes available" },
  { total: 431729, description: "active users" },
  { total: 892173, description: "positive reviews" },
  { total: 56581, description: "photo & videos" },
  { total: 3182, description: "spices and herbs" }
];

// Populate cuisine browser
const cuisineGallery = document.getElementsByClassName(
  "cuisine-browser__gallery"
)[0];

const recipeContainer = document.getElementsByClassName(
  "counter__container"
)[0];

// Use createDocumentFragment
const createCuisineCard = (name, total, image) => {
  const fragement = document.createDocumentFragment();
  const cuisineCard = document.createElement("div");

  // Style the cuisine card
  cuisineCard.className = "cuisine-browser__card-item";

  const img = document.createElement("img");
  img.src = image;
  img.style.width = "100%";

  const textDiv = document.createElement("div");

  const recipeNumber = document.createElement("div");
  recipeNumber.className = "cuisine-browser__subtitle";

  recipeNumber.innerHTML = `${total} Recipes`;
  const recipeName = document.createElement("div");

  recipeName.className = "cuisine-browser__title";
  recipeName.innerHTML = name;

  textDiv.appendChild(recipeNumber);
  textDiv.appendChild(recipeName);
  textDiv.className = "cuisine-browser__text-container";

  // Append to cuisine card
  cuisineCard.appendChild(img);
  cuisineCard.appendChild(textDiv);

  // Append to fragement
  fragement.append(cuisineCard);

  return fragement;
};

// Loop through the cuisine listfragement.append(recipeName);
cuisines.forEach(recipe => {
  const fragement = createCuisineCard(recipe.name, recipe.total, recipe.image);
  cuisineGallery.appendChild(fragement);
});

// // Counter Section
//counter function by using jQurey
$(".count").each(function() {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text()
      },
      {
        duration: 4000,
        easing: "swing",
        step: function(t) {
          $(this).text(Math.ceil(t));
        }
      }
    );
});
