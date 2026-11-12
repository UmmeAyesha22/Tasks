import { useEffect, useState } from "react";
import { getCourseById } from "../data/courses";
import { navigate } from "../hooks/useHashRoute";
import NotFound from "../components/NotFound";

// ----- Validation helpers (same rules as Week 5) -----
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value) {
  const digits = value.replace(/[\s-]/g, "");
  return /^(\+?88)?01[3-9]\d{8}$/.test(digits);
}

function validate(form) {
  const errors = {};
  if (form.fullName.trim().length < 3) {
    errors.fullName = "Please enter your full name (at least 3 characters).";
  }
  if (!isValidEmail(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!isValidPhone(form.phone.trim())) {
    errors.phone = "Enter a Bangladesh mobile number, e.g. 01712345678.";
  }
  if (!form.terms) {
    errors.terms = "You need to accept the terms to continue.";
  }
  return errors;
}

function EnrollPage({ courseId }) {
  const course = getCourseById(courseId);

  const [form, setForm] = useState({ fullName: "", email: "", phone: "", terms: false });
  const [errors, setErrors] = useState({});
  // The popup moves through: "closed" -> "review" -> "sending" -> "sent"
  const [step, setStep] = useState("closed");

  useEffect(() => {
    document.title = course
      ? `Enroll in ${course.title} | YSSE Tech Academy`
      : "Enroll | YSSE Tech Academy";
  }, [course]);

  // Close the review popup with Escape
  useEffect(() => {
    if (step !== "review") return;
    function handleKey(event) {
      if (event.key === "Escape") setStep("closed");
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [step]);

  // Fake "sending" (no backend): wait, save the enrollment, then go to the success page
  useEffect(() => {
    if (step === "sending") {
      const timer = setTimeout(() => {
        const enrollment = {
          courseId: course.id,
          name: form.fullName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          date: new Date().toLocaleDateString("en-GB"),
        };
        try {
          localStorage.setItem("ysseEnrollment", JSON.stringify(enrollment));
        } catch {
          // storage unavailable: the success page will send the visitor back to the list
        }
        setStep("sent");
      }, 1400);
      return () => clearTimeout(timer);
    }

    if (step === "sent") {
      const timer = setTimeout(() => navigate("#/success"), 1800);
      return () => clearTimeout(timer);
    }
  }, [step, course, form]);

  if (!course) {
    return <NotFound message="Pick a course first, then choose Enroll Now." />;
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const foundErrors = validate(form);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length === 0) {
      setStep("review");
    }
  }

  return (
    <>
      <main className="container enroll-layout">
        <div className="enroll-form-wrap">
          <p className="breadcrumb">
            <a href="#/">All Courses</a> / <a href={`#/course/${course.id}`}>{course.title}</a> / Enroll
          </p>
          <h1 className="page-title">Enroll in this course</h1>
          <p className="muted">Fill in your details. You will review them before confirming.</p>

          <form className="panel form-panel" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label htmlFor="fullName">Full name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                autoComplete="name"
                placeholder="Your full name"
                value={form.fullName}
                onChange={handleChange}
              />
              <p className="error">{errors.fullName}</p>
            </div>

            <div className="form-row">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
              <p className="error">{errors.email}</p>
            </div>

            <div className="form-row">
              <label htmlFor="phone">Phone number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                placeholder="01XXXXXXXXX"
                value={form.phone}
                onChange={handleChange}
              />
              <p className="error">{errors.phone}</p>
            </div>

            <div className="form-row checkbox-row">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
              />
              <label htmlFor="terms">I agree to the terms and conditions of YSSE Tech Academy.</label>
            </div>
            <p className="error">{errors.terms}</p>

            <button type="submit" className="btn btn-primary btn-block">Review enrollment</button>
          </form>
        </div>

        <aside className="detail-side">
          <div className="side-card">
            <img src={course.image} alt={course.title} />
            <div className="side-body">
              <h2 className="summary-title">{course.title}</h2>
              <dl className="facts">
                <div><dt>Instructor</dt><dd>{course.instructor}</dd></div>
                <div><dt>Level</dt><dd>{course.level}</dd></div>
                <div><dt>Duration</dt><dd>{course.duration}</dd></div>
                <div><dt>Fee</dt><dd>Free</dd></div>
              </dl>
            </div>
          </div>
        </aside>
      </main>

      {/* Conditional rendering: the confirmation popup only exists after a valid submit */}
      {step !== "closed" && (
        <div className="modal">
          <div className="modal-box" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
            {step === "review" ? (
              <div>
                <h2 id="modalTitle">Confirm your enrollment</h2>
                <p className="muted">Please check your details before confirming.</p>
                <dl className="facts review-facts">
                  <div><dt>Course</dt><dd>{course.title}</dd></div>
                  <div><dt>Instructor</dt><dd>{course.instructor}</dd></div>
                  <div><dt>Name</dt><dd>{form.fullName.trim()}</dd></div>
                  <div><dt>Email</dt><dd>{form.email.trim()}</dd></div>
                  <div><dt>Phone</dt><dd>{form.phone.trim()}</dd></div>
                </dl>
                <div className="modal-actions">
                  <button type="button" className="btn btn-outline" onClick={() => setStep("closed")}>
                    Edit details
                  </button>
                  <button type="button" className="btn btn-primary" autoFocus onClick={() => setStep("sending")}>
                    Confirm enrollment
                  </button>
                </div>
              </div>
            ) : (
              <div className="sent-step">
                {step === "sending" && <div className="spinner"></div>}
                <h2>{step === "sending" ? "Confirming your seat..." : "Confirmation sent"}</h2>
                <p className="muted">
                  {step === "sending"
                    ? "Please wait a moment."
                    : `We sent a confirmation message to ${form.email.trim()}. Taking you to your confirmation page...`}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default EnrollPage;
