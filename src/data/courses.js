// ===== Course data (kept separate from the UI components) =====

export const categories = [
  "All Categories",
  "Web Development",
  "Programming",
  "Graphic Design",
  "Digital Marketing",
  "Data Science"
];

// All courses are free. Instructor names and numbers are sample data.
export const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    category: "Web Development",
    level: "Beginner",
    duration: "4 Weeks",
    lessons: 16,
    rating: 4.9,
    enrolled: 1420,
    instructor: "Nusrat Jahan",
    instructorRole: "Senior Frontend Engineer",
    bio: "Nusrat has trained hundreds of first-time coders to build and publish their first websites.",
    description: "Learn how websites work and build your first pages with HTML and CSS.",
    details: "This course takes you from an empty folder to a published website. You will learn how browsers read HTML, how CSS controls layout and colour, and how to organise a small project properly.",
    outcomes: [
      "Structure pages with semantic HTML",
      "Style layouts with CSS Flexbox and Grid",
      "Make pages responsive on any screen",
      "Publish a finished site on GitHub Pages"
    ],
    image: "/images/course-1.svg"
  },
  {
    id: 2,
    title: "Frontend Web Development with JavaScript",
    category: "Web Development",
    level: "Intermediate",
    duration: "6 Weeks",
    lessons: 22,
    rating: 4.8,
    enrolled: 980,
    instructor: "Tanvir Ahmed",
    instructorRole: "Full-Stack Developer",
    bio: "Tanvir builds production web apps and enjoys explaining how the browser really works.",
    description: "Make pages interactive using JavaScript, events and the DOM.",
    details: "Bring your static pages to life. You will practise variables, functions, arrays and objects, then use them to react to clicks, typing and form input in real mini-projects.",
    outcomes: [
      "Write clean JavaScript with functions and objects",
      "Select and update elements with the DOM",
      "Handle events such as click, input and change",
      "Build a searchable, filterable interface"
    ],
    image: "/images/course-2.svg"
  },
  {
    id: 3,
    title: "Advanced Web Design",
    category: "Web Development",
    level: "Advanced",
    duration: "8 Weeks",
    lessons: 28,
    rating: 5.0,
    enrolled: 760,
    instructor: "Farzana Rahman",
    instructorRole: "UI Engineer",
    bio: "Farzana designs and builds interface systems for products used by thousands of people.",
    description: "Design polished, accessible interfaces with modern CSS techniques.",
    details: "Go beyond the basics of layout. This course covers design systems, accessibility, animation and performance, so your interfaces feel professional and work for everyone.",
    outcomes: [
      "Create a reusable design system",
      "Build accessible, keyboard-friendly components",
      "Add purposeful animation with CSS",
      "Audit and improve page performance"
    ],
    image: "/images/course-3.svg"
  },
  {
    id: 4,
    title: "Python Programming for Beginners",
    category: "Programming",
    level: "Beginner",
    duration: "4 Weeks",
    lessons: 16,
    rating: 4.9,
    enrolled: 1860,
    instructor: "Rakibul Hasan",
    instructorRole: "Software Engineer",
    bio: "Rakibul teaches programming from first principles and loves clear, simple examples.",
    description: "Master Python fundamentals from scratch: variables, loops and functions.",
    details: "No experience needed. You will learn to think like a programmer, write small programs, and solve practical problems with Python step by step.",
    outcomes: [
      "Use variables, data types and operators",
      "Control flow with conditions and loops",
      "Organise code with functions",
      "Read and write simple files"
    ],
    image: "/images/course-4.svg"
  },
  {
    id: 5,
    title: "Object-Oriented Programming in Java",
    category: "Programming",
    level: "Intermediate",
    duration: "8 Weeks",
    lessons: 30,
    rating: 4.7,
    enrolled: 640,
    instructor: "Sadia Islam",
    instructorRole: "Backend Developer",
    bio: "Sadia builds backend services in Java and mentors students through their first large projects.",
    description: "Understand classes, inheritance and polymorphism through hands-on projects.",
    details: "Learn the ideas behind object-oriented design and apply them in Java. Each module ends with a small project that strengthens your understanding.",
    outcomes: [
      "Model real problems with classes and objects",
      "Apply inheritance and polymorphism",
      "Handle errors with exceptions",
      "Use collections to manage data"
    ],
    image: "/images/course-5.svg"
  },
  {
    id: 6,
    title: "Data Structures and Algorithms",
    category: "Programming",
    level: "Advanced",
    duration: "10 Weeks",
    lessons: 36,
    rating: 4.8,
    enrolled: 910,
    instructor: "Mahmudul Karim",
    instructorRole: "Competitive Programming Coach",
    bio: "Mahmudul coaches students for programming contests and technical interviews.",
    description: "Solve problems efficiently with trees, graphs and sorting algorithms.",
    details: "A rigorous course on the building blocks of efficient software. You will analyse complexity, implement core structures and practise on interview-style problems.",
    outcomes: [
      "Analyse time and space complexity",
      "Implement trees, graphs and hash tables",
      "Choose the right algorithm for a problem",
      "Solve interview-style challenges"
    ],
    image: "/images/course-6.svg"
  },
  {
    id: 7,
    title: "Graphic Design Fundamentals",
    category: "Graphic Design",
    level: "Beginner",
    duration: "4 Weeks",
    lessons: 14,
    rating: 4.8,
    enrolled: 1120,
    instructor: "Tasnim Chowdhury",
    instructorRole: "Visual Designer",
    bio: "Tasnim designs campaigns and print materials, and teaches design basics to beginners.",
    description: "Learn colour, typography and layout basics for confident visual design.",
    details: "Understand the principles behind good design before you touch advanced tools. You will practise composition, colour theory and type through short, focused exercises.",
    outcomes: [
      "Apply colour theory to real layouts",
      "Pair and set typefaces with care",
      "Compose balanced, readable layouts",
      "Prepare simple posters and social graphics"
    ],
    image: "/images/course-7.svg"
  },
  {
    id: 8,
    title: "Brand Identity and Logo Design",
    category: "Graphic Design",
    level: "Intermediate",
    duration: "6 Weeks",
    lessons: 20,
    rating: 4.7,
    enrolled: 540,
    instructor: "Imran Hossain",
    instructorRole: "Brand Designer",
    bio: "Imran helps small businesses build recognisable identities from the first sketch to final guidelines.",
    description: "Create logos and brand guidelines that work across print and screen.",
    details: "Learn the full branding process, from research and sketching to final files and a short brand guide that a client can actually use.",
    outcomes: [
      "Research a brand and define its voice",
      "Sketch and refine logo concepts",
      "Build a colour and type system",
      "Deliver a clear brand guideline"
    ],
    image: "/images/course-8.svg"
  },
  {
    id: 9,
    title: "Digital Marketing Essentials",
    category: "Digital Marketing",
    level: "Beginner",
    duration: "4 Weeks",
    lessons: 15,
    rating: 4.8,
    enrolled: 1340,
    instructor: "Mehnaz Akter",
    instructorRole: "Digital Marketing Specialist",
    bio: "Mehnaz runs content and search campaigns and enjoys making marketing easy to understand.",
    description: "Understand SEO, email and content marketing from the ground up.",
    details: "A practical introduction to getting found online. You will learn how search works, how to plan content and how to measure whether your efforts are paying off.",
    outcomes: [
      "Plan a simple content strategy",
      "Apply core on-page SEO",
      "Write effective marketing emails",
      "Read basic analytics reports"
    ],
    image: "/images/course-9.svg"
  },
  {
    id: 10,
    title: "Social Media Advertising Strategy",
    category: "Digital Marketing",
    level: "Intermediate",
    duration: "5 Weeks",
    lessons: 18,
    rating: 4.6,
    enrolled: 720,
    instructor: "Shafiq Alam",
    instructorRole: "Performance Marketer",
    bio: "Shafiq manages paid campaigns and focuses on measurable results.",
    description: "Plan, launch and measure paid campaigns on major social platforms.",
    details: "Learn how to turn a goal into a campaign. You will choose audiences, write ad copy, set budgets and read results to improve the next round.",
    outcomes: [
      "Define goals and target audiences",
      "Write and test ad creative",
      "Set budgets and bidding strategies",
      "Report results and optimise campaigns"
    ],
    image: "/images/course-10.svg"
  },
  {
    id: 11,
    title: "Data Analysis with Python",
    category: "Data Science",
    level: "Intermediate",
    duration: "7 Weeks",
    lessons: 24,
    rating: 4.9,
    enrolled: 830,
    instructor: "Anika Sultana",
    instructorRole: "Data Analyst",
    bio: "Anika turns messy datasets into clear stories for business teams.",
    description: "Clean, analyse and visualise real datasets using pandas and Matplotlib.",
    details: "Work with real datasets from start to finish: loading, cleaning, exploring and presenting findings with clear charts.",
    outcomes: [
      "Load and clean data with pandas",
      "Summarise and group data",
      "Create clear charts with Matplotlib",
      "Present findings to a non-technical audience"
    ],
    image: "/images/course-11.svg"
  },
  {
    id: 12,
    title: "Machine Learning Foundations",
    category: "Data Science",
    level: "Advanced",
    duration: "10 Weeks",
    lessons: 34,
    rating: 4.8,
    enrolled: 590,
    instructor: "Dr. Ariful Haque",
    instructorRole: "Machine Learning Researcher",
    bio: "Dr. Haque researches machine learning and supervises student projects.",
    description: "Train and evaluate your first machine learning models with confidence.",
    details: "Build a solid base in machine learning. You will train models, avoid common pitfalls such as overfitting, and learn how to judge whether a model is any good.",
    outcomes: [
      "Explain supervised and unsupervised learning",
      "Train and test models with scikit-learn",
      "Detect and reduce overfitting",
      "Evaluate models with the right metrics"
    ],
    image: "/images/course-12.svg"
  }
];

// Options for the difficulty-level filter
export const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

// Options for the sort dropdown
export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "popular", label: "Most popular" },
  { value: "rating", label: "Highest rated" },
  { value: "title", label: "Title A to Z" },
  { value: "duration", label: "Shortest duration" }
];

// Find one course by its id (returns undefined when there is no match)
export function getCourseById(id) {
  return courses.find((course) => course.id === id);
}
