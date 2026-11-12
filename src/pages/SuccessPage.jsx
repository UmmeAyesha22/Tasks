import { useEffect } from "react";
import { getCourseById } from "../data/courses";
import { navigate } from "../hooks/useHashRoute";

// Read the enrollment saved by the enroll page (null if there is none)
function readEnrollment() {
  try {
    const saved = localStorage.getItem("ysseEnrollment");
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

function SuccessPage() {
  const enrollment = readEnrollment();
  const course = enrollment ? getCourseById(enrollment.courseId) : undefined;

  useEffect(() => {
    document.title = "Enrollment Confirmed | YSSE Tech Academy";
    // Nobody enrolled yet: send them back to the course list
    if (!enrollment) navigate("#/");
  }, [enrollment]);

  if (!enrollment) return null;

  const firstName = enrollment.name.split(" ")[0];

  return (
    <main className="container narrow">
      <section className="success-card">
        <svg className="check" viewBox="0 0 52 52" aria-hidden="true">
          <circle className="check-circle" cx="26" cy="26" r="24" fill="none" />
          <path className="check-mark" fill="none" d="M14 27 l8 8 l16 -17" />
        </svg>

        <h1>Congratulations, {firstName}!</h1>
        <p className="success-lead">
          You have successfully enrolled in <strong>{course ? course.title : "your course"}</strong>.
        </p>

        <dl className="facts success-facts">
          <div><dt>Name</dt><dd>{enrollment.name}</dd></div>
          <div><dt>Instructor</dt><dd>{course ? course.instructor : ""}</dd></div>
          <div><dt>Duration</dt><dd>{course ? course.duration : ""}</dd></div>
          <div><dt>Enrolled on</dt><dd>{enrollment.date}</dd></div>
        </dl>

        <p className="muted">
          A confirmation message has been sent to <strong>{enrollment.email}</strong>.
        </p>

        <div className="success-actions">
          <a className="btn btn-primary" href={course ? `#/course/${course.id}` : "#/"}>View course</a>
          <a className="btn btn-outline" href="#/">Browse more courses</a>
        </div>
      </section>
    </main>
  );
}

export default SuccessPage;
