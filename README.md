# YSSE React Course System

Week 6 assignment: the Week 5 **Course Search & Filter System** (HTML, CSS and JavaScript) rebuilt with **React and Vite**. The design is the same as Week 5; only the code structure changed, from DOM manipulation to reusable components and state.

## Features

- View 12 free courses, rendered from one data array with `.map()`
- Search by title, category or instructor (case-insensitive, partial match)
- Filter by category and by difficulty level
- Search, category, level and sort all work together, in any order
- "Clear filters" resets everything
- Live result count and a "no courses found" message
- "View Course" opens a full course details page
- "Enroll Now" opens an enrollment form with validation, a review popup, a confirmation step and a success page
- Responsive layout for desktop, tablet and mobile

## Getting started

```bash
npm install
npm run dev
```

Then open the local address shown in the terminal (usually http://localhost:5173).

To create a production build: `npm run build`.

## Project structure

```
ysse-course-system/
├── public/images/          course images and logo
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── SearchBar.jsx       search input (controlled by state)
│   │   ├── FilterSection.jsx   level, sort, reset and category filters
│   │   ├── CourseSection.jsx   result count, card grid, empty/no-results messages
│   │   ├── CourseCard.jsx      one reusable course card
│   │   ├── NotFound.jsx        "course not found" message
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── CoursePage.jsx      course details
│   │   ├── EnrollPage.jsx      enrollment form, validation, review popup
│   │   └── SuccessPage.jsx     confirmation page
│   ├── hooks/useHashRoute.js   tiny router built with useState + useEffect
│   ├── data/courses.js         course data (each course has a unique id)
│   ├── utils/filterCourses.js  search, filter and sort logic
│   ├── App.jsx                 owns all state and connects the components
│   ├── App.css
│   ├── index.css               Week 5 styles
│   └── main.jsx
├── index.html
└── package.json
```

## How it works

- **State (`useState`)** for the course list lives in `App.jsx`: `searchTerm`, `category`, `level` and `sortBy`. The enroll form keeps its own state (form values, errors, popup step) inside `EnrollPage.jsx`.
- **Pages without a router library:** `useHashRoute` reads the URL hash (`#/course/4`, `#/enroll/4`, `#/success`) and `App.jsx` shows the matching page. The browser back button works.
- **Props** carry the state and the change handlers down to `SearchBar`, `FilterSection` and `CourseSection`, and one `course` object down to each `CourseCard`.
- **Filtering** is one function (`filterCourses`) that checks all conditions at once, so the order in which filters are applied does not matter. The visible list is calculated from the state on every render instead of being stored separately.
- **Conditional rendering** shows the result count, the "no courses found" message, an empty-data message, and the enrollment popup. The enrollment is saved in `localStorage` (no backend) so the success page can show it.
