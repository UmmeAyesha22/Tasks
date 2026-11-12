// Pure helper functions: they take data in and return new data.
// Keeping them outside the components makes the logic easy to read and test.

// Search (partial, case-insensitive) + category + level, all combined.
// Each condition is optional, so the order the user applies them in never matters.
export function filterCourses(courses, { searchTerm, category, level }) {
  const keyword = searchTerm.trim().toLowerCase();

  return courses.filter((course) => {
    const text = `${course.title} ${course.category} ${course.instructor}`.toLowerCase();

    const matchesSearch = text.includes(keyword);
    const matchesCategory = category === "All Categories" || course.category === category;
    const matchesLevel = level === "All Levels" || course.level === level;

    return matchesSearch && matchesCategory && matchesLevel;
  });
}

// Sorting works on a copy, so the original course order is never changed.
export function sortCourses(courses, mode) {
  const sorted = [...courses];

  if (mode === "popular") {
    sorted.sort((a, b) => b.enrolled - a.enrolled);
  } else if (mode === "rating") {
    sorted.sort((a, b) => b.rating - a.rating);
  } else if (mode === "title") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  } else if (mode === "duration") {
    sorted.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
  }

  return sorted;
}
