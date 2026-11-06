// ===== Enrollment page: form, validation, confirmation =====

const course = getCourseById(getCourseIdFromUrl());

if (course === null) {
  document.getElementById("enrollContent").hidden = true;
  document.getElementById("notFound").hidden = false;
} else {
  startEnrollPage();
}

function startEnrollPage() {
  // Elements
  const form = document.getElementById("enrollForm");
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const terms = document.getElementById("terms");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const termsError = document.getElementById("termsError");

  const modal = document.getElementById("confirmModal");
  const reviewStep = document.getElementById("reviewStep");
  const sentStep = document.getElementById("sentStep");
  const spinner = document.getElementById("spinner");
  const sentTitle = document.getElementById("sentTitle");
  const sentMessage = document.getElementById("sentMessage");
  const editButton = document.getElementById("editButton");
  const confirmButton = document.getElementById("confirmButton");

  // Fill the course summary
  document.title = "Enroll in " + course.title + " | YSSE Tech Academy";
  document.getElementById("backToCourse").textContent = course.title;
  document.getElementById("backToCourse").href = "course.html?id=" + course.id;
  document.getElementById("courseImage").src = course.image;
  document.getElementById("courseImage").alt = course.title;
  document.getElementById("summaryTitle").textContent = course.title;
  document.getElementById("summaryInstructor").textContent = course.instructor;
  document.getElementById("summaryLevel").textContent = course.level;
  document.getElementById("summaryDuration").textContent = course.duration;

  // ----- Validation -----
  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function isValidPhone(value) {
    const digits = value.replace(/[\s-]/g, "");
    return /^(\+?88)?01[3-9]\d{8}$/.test(digits);
  }

  function validateForm() {
    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    termsError.textContent = "";

    if (fullName.value.trim().length < 3) {
      nameError.textContent = "Please enter your full name (at least 3 characters).";
      isValid = false;
    }
    if (!isValidEmail(email.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }
    if (!isValidPhone(phone.value.trim())) {
      phoneError.textContent = "Enter a Bangladesh mobile number, e.g. 01712345678.";
      isValid = false;
    }
    if (!terms.checked) {
      termsError.textContent = "You need to accept the terms to continue.";
      isValid = false;
    }

    return isValid;
  }

  // ----- Modal -----
  function openModal() {
    document.getElementById("reviewCourse").textContent = course.title;
    document.getElementById("reviewInstructor").textContent = course.instructor;
    document.getElementById("reviewName").textContent = fullName.value.trim();
    document.getElementById("reviewEmail").textContent = email.value.trim();
    document.getElementById("reviewPhone").textContent = phone.value.trim();

    reviewStep.hidden = false;
    sentStep.hidden = true;
    modal.hidden = false;
    confirmButton.focus();
  }

  function closeModal() {
    modal.hidden = true;
  }

  // ----- Confirm: show message, save, go to the success page -----
  function confirmEnrollment() {
    const enrollment = {
      courseId: course.id,
      name: fullName.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      date: new Date().toLocaleDateString("en-GB")
    };

    reviewStep.hidden = true;
    sentStep.hidden = false;
    spinner.hidden = false;
    sentTitle.textContent = "Confirming your seat...";
    sentMessage.textContent = "Please wait a moment.";

    // Pretend to send the confirmation message (no backend in this task)
    setTimeout(function () {
      localStorage.setItem("ysseEnrollment", JSON.stringify(enrollment));

      spinner.hidden = true;
      sentTitle.textContent = "Confirmation sent";
      sentMessage.textContent = "We sent a confirmation message to " + enrollment.email + ". Taking you to your confirmation page...";

      setTimeout(function () {
        window.location.href = "success.html";
      }, 1800);
    }, 1400);
  }

  // ----- Events -----
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      openModal();
    }
  });

  editButton.addEventListener("click", closeModal);
  confirmButton.addEventListener("click", confirmEnrollment);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.hidden && !reviewStep.hidden) {
      closeModal();
    }
  });
}
