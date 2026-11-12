import CourseCard from "./CourseCard";

// Shows the result counter, the grid of cards, and the empty / no-results messages.
function CourseSection({ courses, totalCount }) {
  // Conditional rendering #1: there is no course data at all
  if (totalCount === 0) {
    return (
      <div className="no-results">
        <h3>No courses available</h3>
        <p>Courses will appear here once they are added. Please check back soon.</p>
      </div>
    );
  }

  return (
    <>
      {/* Conditional rendering #2: live count of the courses currently shown */}
      <p className="result-count" aria-live="polite">
        Showing {courses.length} of {totalCount} free courses
      </p>

      <section className="course-grid" aria-label="Courses">
        {courses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </section>

      {/* Conditional rendering #3: filters matched nothing */}
      {courses.length === 0 && (
        <div className="no-results">
          <h3>No courses found</h3>
          <p>No courses found. Try adjusting your search or filters.</p>
        </div>
      )}
    </>
  );
}

export default CourseSection;
