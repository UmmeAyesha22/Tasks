// ===== Success page: show the saved enrollment =====

const saved = localStorage.getItem("ysseEnrollment");

if (saved === null) {
  // Nobody enrolled yet, send them back to the course list
  window.location.href = "index.html";
} else {
  const enrollment = JSON.parse(saved);
  const course = getCourseById(enrollment.courseId);

  const firstName = enrollment.name.split(" ")[0];
  document.getElementById("successHeading").textContent = "Congratulations, " + firstName + "!";
  document.getElementById("successName").textContent = enrollment.name;
  document.getElementById("successEmail").textContent = enrollment.email;
  document.getElementById("successDate").textContent = enrollment.date;

  if (course !== null) {
    document.getElementById("successCourse").textContent = course.title;
    document.getElementById("successInstructor").textContent = course.instructor;
    document.getElementById("successDuration").textContent = course.duration;
    document.getElementById("goToCourse").href = "course.html?id=" + course.id;
  }
}
