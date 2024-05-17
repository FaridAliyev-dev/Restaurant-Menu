var popup = document.getElementById("popup");
const scrollToTopButton = document.getElementById("scrollToTopButton");

// Show the selected menu category and hide other categories

document.addEventListener("DOMContentLoaded", function () {
  let categoryBtns = document.querySelectorAll(".category-button");
  categoryBtns.forEach(function (button) {
    button.addEventListener("click", function () {
      let category = button.dataset.category;
      console.log(category);
      let categories = document.querySelectorAll(".menu-category");
      console.log(categories);
      categories.forEach(function (category) {
        category.classList.remove("active");
      });
      let selectedCategory = document.querySelector(
        '.menu-category[data-category="' + category + '"]'
      );
      console.log(selectedCategory);
      selectedCategory.classList.add("active");
    });
  });
});

// Scroll target in the navbar

document.addEventListener("DOMContentLoaded", function () {
  //   debugger;
  var hashLinks = document.querySelectorAll('a[href^="#"]');
  console.log(hashLinks);
  hashLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(e);
      var targetId = link.getAttribute("href").substring(1);
      console.log(targetId);
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

// Show popup everytime you press on the item

document.addEventListener("DOMContentLoaded", function () {
  var CategoryItems = document.querySelectorAll(
    ".appItem, .mainItem, .dessItem, .bevItem"
  );
  CategoryItems.forEach(function (item) {
    item.addEventListener("click", () => {
      const ingredients = item.getAttribute("data-ingredients").split(",");
      displayPopup(ingredients);
    });
    popup.addEventListener("click", () => {
      closePopup();
    });
    document
      .getElementById("close")
      .addEventListener("click", () => closePopup());
  });
});

function displayPopup(ingredients) {
  let ingredientLists = document.getElementById("ingredients-list");
  ingredientLists.innerHTML = "";

  ingredients.forEach((ingredient) => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient.trim();
    ingredientLists.appendChild(listItem);
  });

  // Display popup function
  popup.style.display = "flex";
}
// close popup function
const closePopup = () => (popup.style.display = "none");

window.addEventListener("scroll", () => {
  // show the button
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopButton.style.display = "block";
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  } else {
    scrollToTopButton.style.display = "none";
  }
});
