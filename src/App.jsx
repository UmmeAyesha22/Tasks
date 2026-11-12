import { useEffect, useState } from "react";
import { courses } from "./data/courses";
import { filterCourses, sortCourses } from "./utils/filterCourses";
import useHashRoute from "./hooks/useHashRoute";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import FilterSection from "./components/FilterSection";
import CourseSection from "./components/CourseSection";
import Footer from "./components/Footer";
import CoursePage from "./pages/CoursePage";
import EnrollPage from "./pages/EnrollPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  // Which page is showing (course list, course details, enroll form or success)
  const route = useHashRoute();

  // The other pages set their own title; the course list sets it here
  useEffect(() => {
    if (route.name === "home") document.title = "YSSE Tech Academy | Explore Our Courses";
  }, [route.name]);

  // ----- State: the single source of truth for the course list filters -----
  // It lives here (not inside the list) so your filters are still there when you come back.
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [level, setLevel] = useState("All Levels");
  const [sortBy, setSortBy] = useState("featured");

  // ----- Derived data: recalculated on every render, so it can never get out of sync -----
  const filtered = filterCourses(courses, { searchTerm, category, level });
  const visibleCourses = sortCourses(filtered, sortBy);

  // ----- Event handlers -----
  function handleReset() {
    setSearchTerm("");
    setCategory("All Categories");
    setLevel("All Levels");
    setSortBy("featured");
  }

  return (
    <>
      <Header active={route.name === "home"} />

      {/* Conditional rendering: only the page that matches the address is shown */}
      {route.name === "home" && (
        <>
          <Hero />

          <main className="container">
            <h2 className="section-title">Explore Our Courses</h2>

            <FilterSection
              category={category}
              level={level}
              sortBy={sortBy}
              onCategoryChange={setCategory}
              onLevelChange={setLevel}
              onSortChange={setSortBy}
              onReset={handleReset}
            >
              <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            </FilterSection>

            <CourseSection courses={visibleCourses} totalCount={courses.length} />
          </main>
        </>
      )}

      {route.name === "course" && <CoursePage courseId={route.id} />}
      {route.name === "enroll" && <EnrollPage key={route.id} courseId={route.id} />}
      {route.name === "success" && <SuccessPage />}

      <Footer />
    </>
  );
}

export default App;
