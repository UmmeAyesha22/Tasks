import { useEffect } from "react";
import { getCourseById } from "../data/courses";
import NotFound from "../components/NotFound";

function CoursePage({ courseId }) {
  const course = getCourseById(courseId);

  useEffect(() => {
    document.title = course
      ? `${course.title} | YSSE Tech Academy`
      : "Course Details | YSSE Tech Academy";
  }, [course]);

  if (!course) {
    return <NotFound message="We could not find that course. Go back and pick one from the list." />;
  }

  // Initials for the instructor avatar, e.g. "Nusrat Jahan" -> "NJ"
  const nameParts = course.instructor.replace("Dr. ", "").split(" ");
  const initials = nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0);

  return (
    <>
      <section className="banner">
        <div className="banner-inner">
          <p className="breadcrumb"><a href="#/">All Courses</a> / <span>{course.title}</span></p>
          <span className="pill pill-dark">{course.category}</span>
          <h1>{course.title}</h1>
          <p className="banner-instructor">Taught by <strong>{course.instructor}</strong></p>
          <div className="banner-tags">
            <span className="tag">{course.level}</span>
            <span className="tag">{course.duration}</span>
            <span className="tag">{"\u2605"} {course.rating.toFixed(1)}</span>
            <span className="tag">Free</span>
          </div>
        </div>
      </section>

      <main className="container detail-layout">
        <div className="detail-main">
          <section className="panel">
            <h2>About this course</h2>
            <p>{course.description}</p>
            <p>{course.details}</p>
          </section>

          <section className="panel">
            <h2>What you will learn</h2>
            <ul className="check-list">
              {course.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </section>

          <section className="panel">
            <h2>Your instructor</h2>
            <div className="instructor-card">
              <div className="avatar">{initials}</div>
              <div>
                <h3>{course.instructor}</h3>
                <p className="muted">{course.instructorRole}</p>
                <p>{course.bio}</p>
              </div>
            </div>
          </section>
        </div>

        <aside className="detail-side">
          <div className="side-card">
            <img src={course.image} alt={course.title} />
            <div className="side-body">
              <p className="price">Free</p>
              <a className="btn btn-primary btn-block" href={`#/enroll/${course.id}`}>Enroll Now</a>
              <dl className="facts">
                <div><dt>Instructor</dt><dd>{course.instructor}</dd></div>
                <div><dt>Category</dt><dd>{course.category}</dd></div>
                <div><dt>Level</dt><dd>{course.level}</dd></div>
                <div><dt>Duration</dt><dd>{course.duration}</dd></div>
                <div><dt>Lessons</dt><dd>{course.lessons} lessons</dd></div>
                <div><dt>Rating</dt><dd>{"\u2605"} {course.rating.toFixed(1)}</dd></div>
                <div><dt>Students enrolled</dt><dd>{course.enrolled.toLocaleString("en-US")}</dd></div>
              </dl>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
}

export default CoursePage;
