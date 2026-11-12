import { useEffect, useState } from "react";

// A tiny router built only with React hooks (no extra library).
// Pages are addressed with the URL hash:
//   #/             course list
//   #/course/4     details of course 4
//   #/enroll/4     enrollment form for course 4
//   #/success      confirmation page
function parseHash() {
  const [name, id] = window.location.hash.replace(/^#\/?/, "").split("/");

  if (name === "course" || name === "enroll") {
    return { name, id: Number(id) };
  }
  if (name === "success") {
    return { name, id: null };
  }
  return { name: "home", id: null };
}

export function navigate(path) {
  window.location.hash = path;
}

export default function useHashRoute() {
  const [route, setRoute] = useState(parseHash);

  useEffect(() => {
    function handleChange() {
      setRoute(parseHash());
      window.scrollTo(0, 0);
    }
    window.addEventListener("hashchange", handleChange);
    return () => window.removeEventListener("hashchange", handleChange);
  }, []);

  return route;
}
