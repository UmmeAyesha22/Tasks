// Controlled input: the text lives in App's state, this component only displays it
// and reports changes through props.
function SearchBar({ searchTerm, onSearchChange }) {
  const hasValue = searchTerm !== "";

  return (
    <div className="field search-field">
      <label htmlFor="searchInput" className="sr-only">Search courses</label>
      <div className={hasValue ? "searchbox has-value" : "searchbox"}>
        <svg className="search-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          type="search"
          id="searchInput"
          placeholder="Search by title, topic or instructor"
          autoComplete="off"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
        {hasValue && (
          <button
            type="button"
            className="search-clear"
            aria-label="Clear search"
            onClick={() => onSearchChange("")}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
