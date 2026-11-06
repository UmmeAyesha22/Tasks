// ===== Home page: display, search, filter, sort =====

// 1. Select elements
const searchInput = document.getElementById("searchInput");
const levelSelect = document.getElementById("levelSelect");
const sortSelect = document.getElementById("sortSelect");
const searchClear = document.getElementById("searchClear");
const resetButton = document.getElementById("resetButton");
const categoryChips = document.getElementById("categoryChips");
const courseContainer = document.getElementById("courseContainer");
const noResults = document.getElementById("noResults");
const resultCount = document.getElementById("resultCount");

// The category is chosen with buttons, so we remember it in a variable
let activeCategory = "All Categories";

// Small helper: create an element with a class and text
function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text !== undefined) {
    element.textContent = text;
  }
  return element;
}

// 2. Category buttons
function createCategoryChips() {
  categoryChips.innerHTML = "";

  for (let i = 0; i < categories.length; i++) {
    const name = categories[i];
    const chip = makeElement("button", "chip", name);
    chip.type = "button";

    chip.addEventListener("click", function () {
      activeCategory = name;
      updateChips();
      filterCourses();
    });

    categoryChips.appendChild(chip);
  }

  updateChips();
}

// Highlight the active category button
function updateChips() {
  const chips = categoryChips.querySelectorAll(".chip");

  for (let i = 0; i < chips.length; i++) {
    const isActive = chips[i].textContent === activeCategory;
    chips[i].classList.toggle("active", isActive);
    chips[i].setAttribute("aria-pressed", isActive);
  }
}

// 3. Display the course cards
function displayCourses(list) {
  courseContainer.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const course = list[i];

    const card = makeElement("article", "course-card");
    card.style.animationDelay = (i % 6) * 50 + "ms";

    // Image area with badges
    const imageWrap = makeElement("div", "card-image");
    const image = document.createElement("img");
    image.src = course.image;
    image.alt = course.title;
    image.loading = "lazy";
    imageWrap.appendChild(image);
    imageWrap.appendChild(makeElement("span", "badge badge-free", "Free"));
    imageWrap.appendChild(makeElement("span", "badge badge-level", course.level));

    // Text area
    const body = makeElement("div", "card-body");

    const meta = makeElement("div", "card-meta");
    meta.appendChild(makeElement("span", "", course.duration));
    meta.appendChild(makeElement("span", "", course.lessons + " Lessons"));
    meta.appendChild(makeElement("span", "card-rating", "\u2605 " + course.rating.toFixed(1)));

    const category = makeElement("p", "card-category", course.category);
    const title = makeElement("h3", "card-title", course.title);
    const description = makeElement("p", "card-description", course.description);

    const instructorRow = makeElement("div", "card-instructor");
    const instructorText = makeElement("span", "", "Instructor: ");
    instructorText.appendChild(makeElement("strong", "", course.instructor));
    instructorRow.appendChild(instructorText);
    instructorRow.appendChild(makeElement("span", "", course.enrolled.toLocaleString("en-US") + " Enrolled"));

    // Buttons (links to the other pages)
    const actions = makeElement("div", "card-actions");
    const viewLink = makeElement("a", "link-view", "View Course");
    viewLink.href = "course.html?id=" + course.id;
    const enrollLink = makeElement("a", "btn btn-primary", "Enroll Now");
    enrollLink.href = "enroll.html?id=" + course.id;
    actions.appendChild(viewLink);
    actions.appendChild(enrollLink);

    body.appendChild(meta);
    body.appendChild(category);
    body.appendChild(title);
    body.appendChild(description);
    body.appendChild(instructorRow);
    body.appendChild(actions);

    card.appendChild(imageWrap);
    card.appendChild(body);
    courseContainer.appendChild(card);
  }

  // No results message
  noResults.hidden = list.length !== 0;

  // Live counter
  resultCount.textContent = "Showing " + list.length + " of " + courses.length + " free courses";
}

// 4. Search: partial, not case-sensitive (title, category or instructor)
function searchCourses(list, keyword) {
  const cleanKeyword = keyword.trim().toLowerCase();
  const matches = [];

  for (let i = 0; i < list.length; i++) {
    const text = (list[i].title + " " + list[i].category + " " + list[i].instructor).toLowerCase();
    if (text.includes(cleanKeyword)) {
      matches.push(list[i]);
    }
  }

  return matches;
}

// 5. Sorting
function sortCourses(list, mode) {
  const sorted = list.slice(); // copy, so the original order is kept

  if (mode === "popular") {
    sorted.sort(function (a, b) { return b.enrolled - a.enrolled; });
  } else if (mode === "rating") {
    sorted.sort(function (a, b) { return b.rating - a.rating; });
  } else if (mode === "title") {
    sorted.sort(function (a, b) { return a.title.localeCompare(b.title); });
  } else if (mode === "duration") {
    sorted.sort(function (a, b) { return parseInt(a.duration) - parseInt(b.duration); });
  }

  return sorted;
}

// 6. Apply search + category + level + sort together
function filterCourses() {
  let results = searchCourses(courses, searchInput.value);

  if (activeCategory !== "All Categories") {
    const byCategory = [];
    for (let i = 0; i < results.length; i++) {
      if (results[i].category === activeCategory) {
        byCategory.push(results[i]);
      }
    }
    results = byCategory;
  }

  if (levelSelect.value !== "All Levels") {
    const byLevel = [];
    for (let i = 0; i < results.length; i++) {
      if (results[i].level === levelSelect.value) {
        byLevel.push(results[i]);
      }
    }
    results = byLevel;
  }

  results = sortCourses(results, sortSelect.value);
  displayCourses(results);
}

// 7. Reset everything
function clearFilters() {
  searchInput.value = "";
  toggleClearButton();
  levelSelect.value = "All Levels";
  sortSelect.value = "featured";
  activeCategory = "All Categories";
  updateChips();
  displayCourses(courses);
}

// 8. Events
function toggleClearButton() {
  const isEmpty = searchInput.value === "";
  searchClear.hidden = isEmpty;
  // Shimmer animation only while the box is empty
  searchInput.closest(".searchbox").classList.toggle("has-value", !isEmpty);
}

searchInput.addEventListener("input", function () {
  toggleClearButton();
  filterCourses();
});

searchClear.addEventListener("click", function () {
  searchInput.value = "";
  toggleClearButton();
  filterCourses();
  searchInput.focus();
});

levelSelect.addEventListener("change", filterCourses);
sortSelect.addEventListener("change", filterCourses);
resetButton.addEventListener("click", clearFilters);

// 9. First load
toggleClearButton();
createCategoryChips();
displayCourses(courses);
