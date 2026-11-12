// Shown when the course id in the address does not match any course
function NotFound({ message }) {
  return (
    <div className="container narrow">
      <div className="no-results">
        <h3>Course not found</h3>
        <p>{message}</p>
        <a className="btn btn-primary" href="#/">Browse courses</a>
      </div>
    </div>
  );
}

export default NotFound;
