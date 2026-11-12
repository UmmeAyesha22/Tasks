// One reusable card. It receives a single course object through props.
function CourseCard({ course, index }) {
  return (
    <article className="course-card" style={{ animationDelay: `${(index % 6) * 50}ms` }}>
      <div className="card-image">
        <img src={course.image} alt={course.title} loading="lazy" />
        <span className="badge badge-free">Free</span>
        <span className="badge badge-level">{course.level}</span>
      </div>

      <div className="card-body">
        <div className="card-meta">
          <span>{course.duration}</span>
          <span>{course.lessons} Lessons</span>
          <span className="card-rating">{"\u2605"} {course.rating.toFixed(1)}</span>
        </div>

        <p className="card-category">{course.category}</p>
        <h3 className="card-title">{course.title}</h3>
        <p className="card-description">{course.description}</p>

        <div className="card-instructor">
          <span>Instructor: <strong>{course.instructor}</strong></span>
          <span>{course.enrolled.toLocaleString("en-US")} Enrolled</span>
        </div>

        <div className="card-actions">
          <a className="link-view" href={`#/course/${course.id}`}>View Course</a>
          <a className="btn btn-primary" href={`#/enroll/${course.id}`}>Enroll Now</a>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
