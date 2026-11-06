// ===== Course details page =====

const course = getCourseById(getCourseIdFromUrl());

if (course === null) {
  document.getElementById("courseContent").hidden = true;
  document.getElementById("notFound").hidden = false;
} else {
  document.title = course.title + " | YSSE Tech Academy";

  // Banner
  document.getElementById("breadcrumbTitle").textContent = course.title;
  document.getElementById("bannerCategory").textContent = course.category;
  document.getElementById("bannerTitle").textContent = course.title;
  document.getElementById("bannerInstructor").textContent = course.instructor;
  document.getElementById("bannerLevel").textContent = course.level;
  document.getElementById("bannerDuration").textContent = course.duration;
  document.getElementById("bannerRating").textContent = "\u2605 " + course.rating.toFixed(1);

  // About + outcomes
  document.getElementById("courseDescription").textContent = course.description;
  document.getElementById("courseDetails").textContent = course.details;

  const outcomesList = document.getElementById("outcomesList");
  for (let i = 0; i < course.outcomes.length; i++) {
    const item = document.createElement("li");
    item.textContent = course.outcomes[i];
    outcomesList.appendChild(item);
  }

  // Instructor card: initials in the avatar
  const nameParts = course.instructor.replace("Dr. ", "").split(" ");
  const initials = nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0);
  document.getElementById("instructorAvatar").textContent = initials;
  document.getElementById("instructorName").textContent = course.instructor;
  document.getElementById("instructorRole").textContent = course.instructorRole;
  document.getElementById("instructorBio").textContent = course.bio;

  // Side card
  const courseImage = document.getElementById("courseImage");
  courseImage.src = course.image;
  courseImage.alt = course.title;
  document.getElementById("factInstructor").textContent = course.instructor;
  document.getElementById("factCategory").textContent = course.category;
  document.getElementById("factLevel").textContent = course.level;
  document.getElementById("factDuration").textContent = course.duration;
  document.getElementById("factLessons").textContent = course.lessons + " lessons";
  document.getElementById("factRating").textContent = "\u2605 " + course.rating.toFixed(1);
  document.getElementById("factEnrolled").textContent = course.enrolled.toLocaleString("en-US");

  document.getElementById("enrollLink").href = "enroll.html?id=" + course.id;
}
