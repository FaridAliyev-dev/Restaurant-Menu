// Show the selected menu category and hide other categories

document.addEventListener("DOMContentLoaded", function () {
  var categoryBtns = document.querySelectorAll(".category-button");
  categoryBtns.forEach(function (button) {
    button.addEventListener("click", function () {
      var category = button.dataset.category;
      console.log(category);
      var categories = document.querySelectorAll(".menu-category");
      console.log(categories);
      categories.forEach(function (category) {
        category.classList.remove("active");
      });
      var selectedCategory = document.querySelector(
        '.menu-category[data-category="' + category + '"]'
      );
      console.log(selectedCategory);
      selectedCategory.classList.add("active");
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("DOM content loaded");

//   // Select all category buttons
//   var categoryButtons = document.querySelectorAll(".category-button");

//   // Add click event listener to each button
//   categoryButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       // Get the category from the button's data attribute
//       var category = button.dataset.category;

//       // Hide all menu categories
//       var categories = document.querySelectorAll(".menu-category");
//       categories.forEach(function (cat) {
//         cat.classList.remove("active");
//       });

//       // Show the selected menu category
//       var selectedCategory = document.querySelector(
//         '[data-category="' + category + '"]'
//       );
//       selectedCategory.classList.add("active");
//     });
//   });
// });
