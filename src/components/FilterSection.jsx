import { categories, levels, sortOptions } from "../data/courses";

// Holds every filter control: difficulty level, sort, reset and the category chips.
// The SearchBar is passed in as `children` so it sits inside the same toolbar,
// exactly where it was in the Week 5 layout.
function FilterSection({
  children,
  category,
  level,
  sortBy,
  onCategoryChange,
  onLevelChange,
  onSortChange,
  onReset,
}) {
  return (
    <>
      <section className="toolbar" aria-label="Search and filters">
        {children}

        <div className="field">
          <label htmlFor="levelSelect">Level</label>
          <select
            id="levelSelect"
            value={level}
            onChange={(event) => onLevelChange(event.target.value)}
          >
            {levels.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="sortSelect">Sort by</label>
          <select
            id="sortSelect"
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <button type="button" className="btn btn-outline" onClick={onReset}>
            Clear filters
          </button>
        </div>
      </section>

      <div className="chips" role="group" aria-label="Filter by category">
        {categories.map((name) => (
          <button
            key={name}
            type="button"
            className={name === category ? "chip active" : "chip"}
            aria-pressed={name === category}
            onClick={() => onCategoryChange(name)}
          >
            {name}
          </button>
        ))}
      </div>
    </>
  );
}

export default FilterSection;
