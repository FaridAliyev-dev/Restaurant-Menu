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

// Scroll target in the navbar

document.addEventListener("DOMContentLoaded", function () {
  debugger;
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
